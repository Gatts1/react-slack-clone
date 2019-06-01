import React from "react";
import LeftSide from "./left-side";
import RightSide from "./right-side";

function Main({ submitSendChannel, listChannel, username }) {
  return (
    <>
      <LeftSide
        submitSendChannel={submitSendChannel}
        listChannel={listChannel}
        username={username}
      />
      <RightSide />
    </>
  );
}

export default Main;
