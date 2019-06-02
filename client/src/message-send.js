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
          width: "100%",
          gridTemplateColumns: "44px 1fr 22px 22px",
          margin: "20px 0px"
        }}
      >
        <form
          onSubmit={handleOnSubmitMessages}
          autoComplete="off"
          css={{
            width: "89%"
          }}
        >
          <label htmlFor="input-message" aria-label="write a message" />
          <input
            name="inputMessage"
            type="text"
            id="input-message"
            css={{
              width: "100%",
              height: 26,
              padding: "9px 66px 9px 9px",
              margin: "0px 15px",
              border: "1px solid rgb(15, 15, 15)",
              borderRadius: "0.5em"
            }}
            placeholder={`Send message to #${channelName}`}
          />
        </form>
      </div>
    </>
  );
}

export default MessageSend;
