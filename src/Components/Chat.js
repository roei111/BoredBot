import { useRef, useState } from "react";
import Message from "./Message";
import ChatButtons from "./ChatButtons";
import {
  getActivity,
  getAllActivities,
  getInitialMessages,
} from "../activityUtils";
import "./Chat.css";

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
      return [...prevMessages, { autor: autor, text: text }];
    });
    setTimeout(() => {
      chatRef.current.scroll({
        top: chatRef.current.scrollHeight,
        behavior: "smooth",
      });
    }, 0);
  };

  const noClickHandler = () => {
    addNewMessage("human", "לא");
    setIsBotTyping(true);
    setTimeout(() => {
      addNewMessage("bot", getActivity(activities));
      setIsBotTyping(false);
    }, 500);
  };

  const yesClickHandler = () => {
    addNewMessage("human", "כן");
    addNewMessage("bot", "לך תעשה את זה!!");
    setIsDone(true);
  };

  const restart = () => {
    activities = getAllActivities();
    setIsDone(false);
    setMessages(() => getInitialMessages(activities));
  };

  return (
    <div className="chat" ref={chatRef}>
      <ul className="messages-list">
        {messages.map((message, index) => {
          return <Message key={index} message={message} />;
        })}
      </ul>
      {isBotTyping ? <h4>מקליד...</h4> : null}
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
