/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

function ChannelElement({ channelName }) {
  function handleClick(event) {
    console.log("Add channel", channelName);
  }

  return (
    <li
      onClick={handleClick}
      css={{
        boxSizing: "border-box",
        width: "100%",
        paddingTop: "3px",
        paddingBottom: "3px",
        paddingLeft: "10px",
        listStyle: "none",
        color: "rgb(167, 163, 168)",
        "&:hover": {
          backgroundColor: "#301231",
          cursor: "pointer"
        }
      }}
    >
      # {channelName}
    </li>
  );
}

export default ChannelElement;
