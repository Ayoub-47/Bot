import React from "react";

function Form({ updateVisibility }) {
  return (
    <div id="form-container">
      <div id="form">
        <h2>Add profile</h2>
        <form action="">
          <div id="inputs">
            <label for="name">Name</label>
            <input type="text" name="name" placeholder="Put your name" />
            <label for="description">Description</label>
            <textarea
              name="description"
              cols="30"
              rows="10"
              placeholder="Give a brief introduction of your self.."
            ></textarea>
          </div>
          <div id="buttons">
            <div id="cancel" onClick={updateVisibility}>
              Cancel
            </div>
            <input type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
