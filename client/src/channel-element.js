import React from "react";

function ChannelElement({ channelName }) {
  function handleClick(event) {
    console.log("Add channel", channelName);
  }

  return <li onClick={handleClick}># {channelName}</li>;
}

export default ChannelElement;
