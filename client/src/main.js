import React from "react";
import LeftSide from "./left-side";

function Main({ submitSendChannel, listChannel, username }) {
  return (
    <LeftSide submitSendChannel={submitSendChannel} listChannel={listChannel} username={username} />
  );
}

export default Main;
