import { getTime } from "../utils/date";
import "./Message.css";

const Message = (props) => {
  const { autor, text, date } = props.message;
  const time = getTime(date);
  return (
    <li className={`message ${autor}-message`}>
      {autor === "bot" ? (
        <img className="bot-avatar" src="https://res.cloudinary.com/dq6iduc79/image/upload/v1665729398/Bored%20Bot/chatBotAvatar_n22khj.png" alt="bot avatar" />
      ) : null}
      <div>
        <div className={`text-message ${autor}-text-message`}>{text}</div>
        <div className={`time ${autor}-time`}>{time}</div>
      </div>
    </li>
  );
};

export default Message;
