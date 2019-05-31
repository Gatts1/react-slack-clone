import React from "react";
import ChannelCreate from "./channel-create";
import ChannelList from "./channel-list";

function ChannelsSection({ submitSendChannel, listChannel }) {
  return (
    <>
      <ChannelCreate submitSendChannel={submitSendChannel} />
      <ChannelList listChannel={listChannel} />
    </>
  );
}

export default ChannelsSection;
