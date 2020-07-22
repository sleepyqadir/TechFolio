import React from "react";

function Message({ message }) {
  return (
    <div className={message.type}>
      <div className={`msg-${message.type}`}>
        <div className="letter"></div>
      </div>
      <div className="shadow"></div>
      <h1 className="title">{message.title}</h1>
      {message.desc && <p className="message">{message.desc}</p>}
    </div>
  );
}

export default Message;
