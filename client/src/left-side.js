/** @jsx jsx */
import React from "react";
import HeaderName from "./header-name";
import ChannelsSection from "./channels-section";
import { jsx } from "@emotion/core";

function LeftSide({
  submitSendChannel,
  listChannel,
  username,
  setIndexChannelActive
}) {
  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#411d40",
        height: "100vh",
        minWidth: "220px",
        zIndex: "10"
      }}
    >
      <HeaderName username={username} />
      <ChannelsSection
        submitSendChannel={submitSendChannel}
        listChannel={listChannel}
        setIndexChannelActive={setIndexChannelActive}
      />
    </div>
  );
}

export default LeftSide;
