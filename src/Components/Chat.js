import { useState } from "react";
import Message from "./Message";

const defaultActivities = ["activity 1", "activity 2", "activity 3", "activity 4"];
const activities = [...defaultActivities]
const getActivity = () => {
  let randomNum = Math.floor(Math.random() * activities.length);
  const activity = activities.splice(randomNum, 1)[0];
  console.log("deleted activity!!!!! ", activity);
  return activity;
};

const initialMessages = [
  { autor: "human", content: "Give me something to do" },
  { autor: "bot", content: getActivity() },
];

const Chat = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [isDone, setIsDone] = useState(false);

  const noClickHandler = () => {
    setMessages((prevMessages) => {
      return [...prevMessages, { autor: "bot", content: getActivity() }];
    });
  };

  const yesClickHandler = () => {
    setIsDone(true);
  };

  const restart = () => {};

  return (
    <div>
      <h2>Chat</h2>
      {messages.map((message, index) => {
        return <Message key={index} message={message} />;
      })}
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
