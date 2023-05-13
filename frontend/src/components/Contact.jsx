import React, { useState } from "react";
import default_avatar from "../assets/profiles/1.jpg";
import plusIcon from "../assets/icons/plus.png";

const create_contacts = (contacts) => {
  return (
    <ul>
      {contacts.map((contact) => {
        return (
          <li className="message" key={contact.time + "_contact"}>
            <div className="avatar">
              <img
                src={contact.avatar ? contact.avatar : default_avatar}
                alt=""
              />
              <div className="connected"></div>
            </div>
            <div className="name-lastMssg">
              <h4>{contact.name}</h4>
              <p>{contact.last_message}</p>
            </div>
            <div className="time">
              <h4>{contact.time}</h4>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

function Contact({ updateVisibility }) {
  const [contacts, setContacts] = useState([
    {
      avatar: undefined,
      name: "Touahria Yacine",
      last_message: "How are you?",
      time: "09:00",
    },
    {
      avatar: undefined,
      name: "Touahria Yacine",
      last_message: "How are you?",
      time: "09:01",
    },
  ]);

  return (
    <div id="contacts">
      <div id="add_user">
        <button onClick={updateVisibility}>
          <img src={plusIcon} alt="" />
        </button>
      </div>
      {create_contacts(contacts)}
    </div>
  );
}

export default Contact;
