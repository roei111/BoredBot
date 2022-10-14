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
  const chatRef = useRef(null);

  const addNewMessage = (autor, text) => {
    setMessages((prevMessages) => {
      return [...prevMessages, { autor: autor, text: text, date: new Date() }];
    });
    setTimeout(() => {
      chatRef.current.scroll({
        top: chatRef.current.scrollHeight,
        behavior: "smooth",
      });
    }, 0);
  };

  const noClickHandler = () => {
    if(isBotTyping) return;
    addNewMessage("human", "לא 👎");
    setIsBotTyping(true);
    setTimeout(() => {
      addNewMessage("bot", getActivity(activities));
      setIsBotTyping(false);
    }, 500);
  };

  const yesClickHandler = () => {
    if(isBotTyping) return;
    addNewMessage("human", "כן 👍");
    addNewMessage("bot", "לך תעשה את זה!!");
    setIsDone(true);
  };

  const restart = () => {
    activities = getAllActivities();
    setIsDone(false);
    setMessages(() => getInitialMessages(activities));
  };

  const botTypingMessage = { autor: "bot", text: <TypingLoader/>, date: new Date() };

  return (
    <div className="chat" ref={chatRef}>
      <div className="date">{getFullDate()}</div>
      <ul className="messages-list">
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
