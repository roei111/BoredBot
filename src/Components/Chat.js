import { useRef, useState } from "react";
import Message from "./Message";
import ChatButtons from "./ChatButtons";
import {
  getActivity,
  getAllActivities,
  getInitialMessages,
} from "../utils/activity";
import { getFullDate } from "../utils/date";
import "./Chat.css";
import TypingLoader from "./TypingLoader";

let activities = getAllActivities();

const Chat = () => {
  const [messages, setMessages] = useState(() =>
    getInitialMessages(activities)
  );
  const [isDone, setIsDone] = useState(false);
  const [isBotTyping, setIsBotTyping] = useState(false);
  const messagesRef = useRef(null);

  const addNewMessage = (autor, text, link = "") => {
    setMessages((prevMessages) => {
      return [
        ...prevMessages,
        { autor: autor, text: text, link: link, date: new Date() },
      ];
    });
    setTimeout(() => {
      console.log(messagesRef.current.scrollHeight, "text:", text);
      messagesRef.current.scroll({
        top: messagesRef.current.scrollHeight,
        behavior: "smooth",
      });
    }, 10);
  };

  const lastBotMessage = (link) => {
    if (!link) return "לך תעשה את זה!!";
    return (
      <div>
        לך תעשה את זה!!
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

  const noClickHandler = () => {
    if (isBotTyping) return;
    addNewMessage("human", "לא 👎");
    setIsBotTyping(true);
    const { text, link } = getActivity(activities);
    setTimeout(() => {
      setIsBotTyping(false);
      addNewMessage("bot", text, link);
    }, 500);
  };

  const yesClickHandler = () => {
    if (isBotTyping) return;
    const lastActivityLink = messages[messages.length - 1].link;
    addNewMessage("human", "כן 👍");
    addNewMessage("bot", lastBotMessage(lastActivityLink));
    setIsDone(true);
  };

  const restart = () => {
    activities = getAllActivities();
    setIsDone(false);
    setMessages(() => getInitialMessages(activities));
  };

  const botTypingMessage = {
    autor: "bot",
    text: <TypingLoader />,
    date: new Date(),
  };

  return (
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
  );
};

export default Chat;
