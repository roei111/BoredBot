const Message = (props) => {
  const { autor, content } = props.message;

  return (
    <li>
      {autor}: {content}
    </li>
  );
};

export default Message;
