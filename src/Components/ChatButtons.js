import "./ChatButtons.css"

const ChatButtons = (props) => {
  const { isDone, restart, yes, no } = props;
  return isDone ? (
    <div className="chat-buttons">
      <button>מעולה!!</button>
      <button onClick={() => restart()}>הפעלה מחדש</button>
    </div>
  ) : (
    <div className="chat-buttons">
      <button onClick={() => yes()}>כן 👍</button>
      <button onClick={() => no()}>לא 👎</button>
    </div>
  );
};

export default ChatButtons;
