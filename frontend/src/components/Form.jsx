import React from "react";
import {useState} from 'react';

function Form({ updateVisibility, handleNewProfile }) {
  const [name, SetName] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div id="form-container">
      <div id="form">
        <h2>Add profile</h2>
        <form action="">
          <div id="inputs">
            <label for="name">Name</label>
            <input type="text" name="name" placeholder="Put your name" value={name} onChange={(e)=>SetName(e.target.value)} />
            <label for="description">Description</label>
            <textarea
              name="description"
              cols="30"
              rows="10"
              placeholder="Give a brief introduction of your self.."
              value = {description}
              onChange={(e)=>setDescription(e.target.value)}
            ></textarea>
          </div>
          <div id="buttons">
            <div id="cancel" onClick={updateVisibility}>
              Cancel
            </div>
            <input type="submit" onClick={()=>handleNewProfile(name, description)}/>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
