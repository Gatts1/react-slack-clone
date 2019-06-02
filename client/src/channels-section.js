import React from "react";
import ChannelCreate from "./channel-create";
import ChannelList from "./channel-list";

function ChannelsSection({
  submitSendChannel,
  listChannel,
  setIndexChannelActive
}) {
  return (
    <>
      <ChannelCreate submitSendChannel={submitSendChannel} />
      <ChannelList
        listChannel={listChannel}
        setIndexChannelActive={setIndexChannelActive}
      />
    </>
  );
}

export default ChannelsSection;
