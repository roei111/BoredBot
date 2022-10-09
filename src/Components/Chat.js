import { useState } from "react";
import Message from "./Message";

const defaultActivities = [
  "activity 1",
  "activity 2",
  "activity 3",
  "activity 4",
];
let activities = [...defaultActivities];
const getActivity = () => {
  let randomNum = Math.floor(Math.random() * activities.length);
  const activity = activities.splice(randomNum, 1)[0];
  return activity;
};

const getInitialMessages = () => {
  return [
    { autor: "human", content: "Give me something to do" },
    { autor: "bot", content: getActivity() },
  ];
};
const initialMessages = getInitialMessages();

const Chat = () => {
  const [messages, setMessages] = useState(initialMessages);
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
      addNewMessage("bot", getActivity());
      setIsBotTyping(false);
    },500)
  };

  const yesClickHandler = () => {
    addNewMessage("human", "Yes");
    addNewMessage("bot", "Go do it!!");
    setIsDone(true);
  };

  const restart = () => {
    activities = [...defaultActivities];
    setIsDone(false);
    const initialMessages = getInitialMessages();
    setMessages(initialMessages);
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
