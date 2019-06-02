/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

function ChannelElement({ channelName, setIndexChannelActive, dataIndex }) {
  function handleClick(event) {
    setIndexChannelActive(dataIndex);
  }

  return (
    <li
      onClick={handleClick}
      css={{
        boxSizing: "border-box",
        width: "100%",
        padding: "3px 0 3px 10px",
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
