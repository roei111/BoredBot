import chatBotAvatar from "../images/chatBotAvatar.png";
import "./Message.css";

const Message = (props) => {
  const { autor, text } = props.message;

  return (
    <li className={`message ${autor}-message`}>
      {autor === "bot" ? (
        <img className="bot-avatar" src={chatBotAvatar} alt="bot avatar" />
      ) : null}
      <div>
        <div className={`text-message ${autor}-text-message`}>{text}</div>
        <div className={`time ${autor}-time`}>20:11</div>
      </div>
    </li>
  );
};

export default Message;
