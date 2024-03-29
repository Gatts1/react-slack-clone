/** @jsx jsx  */
import React from "react";
import { jsx } from "@emotion/core";

function MessageSend({ submitSendMessage, channelName }) {
  function handleOnSubmitMessages(event) {
    event.preventDefault();
    submitSendMessage(event.target.elements.inputMessage.value);
    event.target.elements.inputMessage.value = "";
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
      >
        <form
          onSubmit={handleOnSubmitMessages}
          autoComplete="off"
        >
          <label htmlFor="input-message" aria-label="write a message" />
          <input
            name="inputMessage"
            type="text"
            id="input-message"
            css={{
              width: "89%",
              padding: "15px",
              borderRadius: "10px"
            }}
            placeholder={`Send message to #${channelName}`}
          />
        </form>
      </div>
    </>
  );
}

export default MessageSend;
