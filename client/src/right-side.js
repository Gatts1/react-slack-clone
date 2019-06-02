/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

import HeaderChannel from "./header-channel";
import MessageSection from "./message-section";
import MessageSend from "./message-send";

function RightSide({ submitSendMessage, listMessages, channelName }) {
  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        justifyContent: "space-between",
        alignItems: "center",
        flexGrow: 1
      }}
    >
      <HeaderChannel name={channelName} />
      <MessageSection listMessages={listMessages} />
      <MessageSend
        submitSendMessage={submitSendMessage}
        channelName={channelName}
      />
    </div>
  );
}

export default RightSide;
