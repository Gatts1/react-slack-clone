import React from "react";
import { Global, jsx } from "@emotion/core";
import LeftSide from "./left-side";
import RightSide from "./right-side";

function Main({
  submitSendChannel,
  listChannel,
  submitSendMessage,
  listMessages,
  username,
  setIndexChannelActive,
  channelName
}) {
  console.log(channelName);
  return (
    <>
      <Global
        styles={{
          "#root": {
            display: "flex",
            flexDirection: "row",
            margin: 0,
            fontFamily: "'Lato', sans-serif",
            overflow: "scroll",
            overflowX: "hidden",
            overflowY: "hidden",
            height: "100vh"
          },
          img: {
            borderRadius: 3
          },
          p: {
            margin: 0,
            padding: 0
          },
          span: {
            color: "#848385"
          }
        }}
      />
      <LeftSide
        submitSendChannel={submitSendChannel}
        listChannel={listChannel}
        username={username}
        setIndexChannelActive={setIndexChannelActive}
      />
      <RightSide
        submitSendMessage={submitSendMessage}
        listMessages={listMessages}
        channelName={channelName}
      />
    </>
  );
}

export default Main;
