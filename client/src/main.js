import React from "react";
import LeftSide from "./left-side";

function Main({ submitSendChannel, listChannel }) {
  return (
    <LeftSide submitSendChannel={submitSendChannel} listChannel={listChannel} />
  );
}

export default Main;
