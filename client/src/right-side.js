/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

import HeaderChannel from "./header-channel";
import MessageSection from "./message-section";

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
    </div>
  );
}

export default RightSide;
