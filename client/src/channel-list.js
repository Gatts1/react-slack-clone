import React from "react";
import ChannelElement from "./channel-element";

function ChannelList({ listChannel }) {
  const channelsData = listChannel;

  return (
    <ul>
      {channelsData.map(channel => {
        return <ChannelElement key={channel.id} channelName={channel.name} />;
      })}
    </ul>
  );
}

export default ChannelList;
