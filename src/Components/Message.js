import chatBotAvatar from "../images/chatBotAvatar.png"


const Message = (props) => {
  const { autor, text } = props.message;

  return (
    <li>
      {autor === "bot" ? <img src={chatBotAvatar}/> : null}
      {autor}: {text}
    </li>
  );
};

export default Message;
