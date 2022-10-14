import startConfetti from "../utils/confetti";
import "./ChatButtons.css";

const ChatButtons = (props) => {
  const { isDone, restart, yes, no } = props;
  return isDone ? (
    <div className="chat-buttons">
      <button onClick={(e) => startConfetti(e.target)}>מעולה!!</button>
      <button onClick={() => restart()}>הפעלה מחדש</button>
    </div>
  ) : (
    <div className="chat-buttons">
      <button
        onClick={(e) => {
          yes();
          startConfetti(e.target);
        }}
      >
        כן 👍
      </button>
      <button onClick={() => no()}> לא, תציע לי משהו אחר 👎</button>
    </div>
  );
};

export default ChatButtons;
