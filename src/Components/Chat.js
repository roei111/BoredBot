import { useState } from "react";
import Message from "./Message";
import { getActivity, getAllActivities, getInitialMessages } from "../activityUtils";

let activities = getAllActivities();

const Chat = () => {
  const [messages, setMessages] = useState(() => getInitialMessages(activities));
  const [isDone, setIsDone] = useState(false);
  const [isBotTyping, setIsBotTyping] = useState(false);

  const addNewMessage = (autor, content) => {
    setMessages((prevMessages) => {
      return [...prevMessages, { autor: autor, content: content }];
    });
  };

  const noClickHandler = () => {
    addNewMessage("human", "No");
    setIsBotTyping(true);
    setTimeout(()=>{
      addNewMessage("bot", getActivity(activities));
      setIsBotTyping(false);
    },500)
  };

  const yesClickHandler = () => {
    addNewMessage("human", "Yes");
    addNewMessage("bot", "Go do it!!");
    setIsDone(true);
  };

  const restart = () => {
    activities = getAllActivities();
    setIsDone(false);
    setMessages(() => getInitialMessages(activities));
  };

  return (
    <div>
      <h2>Chat</h2>
      <ul>
        {messages.map((message, index) => {
          return <Message key={index} message={message} />;
        })}
      </ul>
      {isBotTyping ? <h4>Typing...</h4> : null}
      {isDone ? (
        <div>
          <button>Great!!</button>
          <button onClick={restart}>Restart</button>
        </div>
      ) : (
        <div>
          <button onClick={yesClickHandler}>Yes</button>
          <button onClick={noClickHandler}>No</button>
        </div>
      )}
    </div>
  );
};

export default Chat;
