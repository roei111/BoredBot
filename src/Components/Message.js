const Message = (props) => {
  const { autor, content } = props.message;

  return (
    <div>
      {autor}: {content}
    </div>
  );
};

export default Message;
