/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import ChannelElement from "./channel-element";

function ChannelList({ listChannel, setIndexChannelActive }) {
  const channelsData = listChannel;

  return (
    <ul
      css={{
        paddingLeft: "0",
        width: "100%",
        margin: "0",
        marginBottom: "10px"
      }}
    >
      {channelsData.map((channel, index) => {
        return (
          <ChannelElement
            key={channel.id}
            channelName={channel.name}
            setIndexChannelActive={setIndexChannelActive}
            dataIndex={index}
          />
        );
      })}
    </ul>
  );
}

export default ChannelList;
