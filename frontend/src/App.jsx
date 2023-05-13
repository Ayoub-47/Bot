import React, { useState } from "react";
import Form from "./components/Form";
import NavBar from "./components/NavBar";
import Contact from "./components/Contact";
import Messages from "./components/Messages";
import searchIcon from "./assets/icons/search-interface-symbol.png";
import smileIcon from "./assets/icons/smile.png";
import fileIcon from "./assets/icons/file.png";
import sendIcon from "./assets/icons/send.png";

function App() {
  const [formVisibility, setFormVisibility] = useState(false);
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  const updateVisibility = () => {
    setFormVisibility(() => !formVisibility);
  };

  const chat = async (e, message) => {
    e.preventDefault();

    if (!message) return;
    setIsTyping(true);

    let msgs = chats;
    msgs.push({ role: "user", content: message });
    setChats(msgs);


    fetch("http://localhost:8000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chats,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        msgs.push(data.output);
        setChats(msgs);
        setIsTyping(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }



  return (
    <div id="app-container">
      {formVisibility && <Form updateVisibility={updateVisibility}></Form>}
      <NavBar></NavBar>
      <div id="main">
        <div id="search-bar">
          <div id="search-img">
            <img src={searchIcon} alt="" />
          </div>
          <input type="text" placeholder="search" />
        </div>
        <Contact updateVisibility={updateVisibility}></Contact>
        <div id="chat-container">
          <div id="chats">
            <Messages msgList={chats} ></Messages>
          </div>
          <div id="tools">
            <form id="chat-bar" onSubmit={(e)=> chat(e, message)}>
              <img src={smileIcon} alt="" id="emoji" />
              <input type="text" placeholder="Type a message" value={message} onChange={(e) => setMessage(e.target.value)} />
              <img src={fileIcon} alt="" id="add-file" />
            </form>
            <div id="send-btn" onClick={(e)=> chat(e, message)}>
              <img src={sendIcon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
