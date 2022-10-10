import { useState } from "react";
import Message from "./Message";
import { getActivity, getAllActivities, getInitialMessages } from "../activityUtils";
import "./Chat.css"

let activities = getAllActivities();

const Chat = () => {
  const [messages, setMessages] = useState(() => getInitialMessages(activities));
  const [isDone, setIsDone] = useState(false);
  const [isBotTyping, setIsBotTyping] = useState(false);

  const addNewMessage = (autor, text) => {
    setMessages((prevMessages) => {
      return [...prevMessages, { autor: autor, text: text }];
    });
  };

  const noClickHandler = () => {
    addNewMessage("human", "לא");
    setIsBotTyping(true);
    setTimeout(()=>{
      addNewMessage("bot", getActivity(activities));
      setIsBotTyping(false);
    },500)
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
    <div className="chat">
      <ul className="messages-list">
        {messages.map((message, index) => {
          return <Message key={index} message={message} />;
        })}
      </ul>
      {isBotTyping ? <h4>מקליד...</h4> : null}
      {isDone ? (
        <div>
          <button>מעולה!!</button>
          <button onClick={restart}>הפעלה מחדש</button>
        </div>
      ) : (
        <div>
          <button onClick={yesClickHandler}>כן</button>
          <button onClick={noClickHandler}>לא</button>
        </div>
      )}
    </div>
  );
};

export default Chat;
