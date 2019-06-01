import React from "react";
import { jsx } from "@emotion/core";

import HeaderChannel from "./header-channel";

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
      <HeaderChannel />
    </div>
  );
}

export default RightSide;
