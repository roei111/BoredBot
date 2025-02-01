import { useRef, useState, useEffect } from "react";
import Message from "./Message";
import ChatButtons from "./ChatButtons";
import { getInitialMessages, getActivity } from "../utils/activity";
import { getFullDate } from "../utils/date";
import "./Chat.css";
import TypingLoader from "./TypingLoader";
import backgroundBlob from "../img/background-blob.svg";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [isDone, setIsDone] = useState(false);
  const [isBotTyping, setIsBotTyping] = useState(false);
  const messagesRef = useRef(null);

  const fetchActivities = async () => {
    try {
      const messages = await getInitialMessages();
      setMessages(messages);
    } catch (error) {
      console.error("Failed to fetch activities:", error);
    }
  };

  useEffect(() => {
    fetchActivities();
  }, []);

  const addNewMessage = (autor, text, link = "") => {
    setMessages((prevMessages) => {
      return [
        ...prevMessages,
        { autor: autor, text: text, link: link, date: new Date() },
      ];
    });
    setTimeout(() => {
      messagesRef.current.scroll({
        top: messagesRef.current.scrollHeight,
        behavior: "smooth",
      });
    }, 10);
  };

  const lastBotMessage = (link) => {
    if (!link) return "לך תעשה את זה!! 🎉";
    return (
      <div>
        לך תעשה את זה!! 🎉
        <br />
        הלינק הזה יעזור לך:
        <br />
        <a
          href={link}
          style={{ color: "#fff" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link}
        </a>
      </div>
    );
  };

  const noClickHandler = async () => {
    if (isBotTyping) return;
    addNewMessage("human", " לא, תציע לי משהו אחר 👎");
    setIsBotTyping(true);
    const { text, link } = await getActivity();
    setIsBotTyping(false);
    addNewMessage("bot", text, link);
  };

  const yesClickHandler = () => {
    if (isBotTyping) return;
    const lastActivityLink = messages[messages.length - 1].link;
    addNewMessage("human", "כן 👍");
    addNewMessage("bot", lastBotMessage(lastActivityLink));
    setIsDone(true);
  };

  const restart = () => {
    setIsDone(false);
    fetchActivities();
  };

  const botTypingMessage = {
    autor: "bot",
    text: <TypingLoader />,
    date: new Date(),
  };

  return (
    <div className="chat-wrapper">
      <img className="background-blob" src={backgroundBlob} alt="background blob" />
      <div className="chat">
        <div className="date">{getFullDate()}</div>
        <ul className="messages-list" ref={messagesRef}>
          {messages.map((message, index) => {
            return <Message key={index} message={message} />;
          })}
          {isBotTyping ? <Message message={botTypingMessage} /> : null}
        </ul>
        <ChatButtons
          isDone={isDone}
          restart={restart}
          yes={yesClickHandler}
          no={noClickHandler}
        />
      </div>
    </div>
  );
};

export default Chat;
