/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

import HeaderChannel from "./header-channel";
import MessageSection from "./message-section";
import MessageSend from "./message-send";

function RightSide() {
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
      <HeaderChannel name="general" />
      <MessageSection />
      <MessageSend />
    </div>
  );
}

export default RightSide;
