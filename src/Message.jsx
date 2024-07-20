import React from "react";

const Message = () => {
  return (
    <section className="message">
      <div className="m-container">
        <div className="m-left">
          <h2>Send reminders , SMS and incoives to customers</h2>
          <button className="m-btn">Setup now</button>
        </div>
        <div className="m-right">
          <img src="./message.png" alt="message-imgage" />
          <span className="blur-header"></span>
        </div>
      </div>
    </section>
  );
};

export default Message;
