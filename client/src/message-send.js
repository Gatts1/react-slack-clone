/** @jsx jsx  */
import React from "react";
import { jsx } from "@emotion/core";



function MessageSend() {
  const [message, setMessage] = React.useState("");

  function handleSubmit(event) {
   event.preventDefault();
   setMessage(false);
  }
  function handleChange(event) {
    setMessage(event.target.value);
  }

  return (
    <>
      <div
        css={{
          overflowY: "auto",
          overflowX: "hidden",
          width: "98%",
          paddingLeft: "15px",
          textAlign: "end"
        }}
      />
      <div>
        <p>{message}</p>
        <form onSubmit={handleSubmit} onChange={handleChange}
          autoComplete="off"
        >
          <label htmlFor="input-message" aria-label="write a message" />
          <input 
            css={{
              width: "89%",
              padding: "15px",
              borderRadius: "10px"
            }}
            type="text"
            name="input-Message"
            author= "Gatts"
            content= {message}
            date= "2019-02-01T03:22:31.182Z"

            
            placeholder="&#65291; |  Message #general"
          />
        </form>
      </div>
    </>
  );
}

export default MessageSend;
