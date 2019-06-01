import React from "react";
import { jsx } from "@emotion/core";

import MessageBody from "./message-body";

function ChannelElement({ channelName }) {
  function handleClick(event) {
    console.log("Add channel", channelName);
  }

  return <li onClick={handleClick}># {channelName}</li>;
}

export default ChannelElement;
