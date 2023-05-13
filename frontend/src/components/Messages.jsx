import React, { useState } from "react";
import default_avatar from "../assets/profiles/1.jpg";

const create_messages = (messages) => {
  return messages.map((message) => {
    if (message.role === "user") {
      return (
        <li className="me" key={"me_" + message}>  
          <div className="mssg-me" key={"message_list_from_me" + message}>
            <div className="other-mssg" key={message + "_me"}>
                <p>{message.content}</p>
            </div>
          </div>
        </li>
      );
    } else {
      return (
        <li className="other" key={"other_" + message}>
          <div className="other-avatar">
            <img src={message.profile ? message.profile : default_avatar} />
            {/* message.time */}
          </div>
          <div className="list-messages">
            
            <div className="other-mssg" key={"other_" + message}>
              <p>{message.content}</p>
            </div>
           
          </div>
        </li>
      );
    }
  });
};

function Messages({msgList}) {
  const [messages, setMessages] = useState("");
  return <ul>{create_messages(msgList)}</ul>;
}

export default Messages;
