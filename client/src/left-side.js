import React from "react";
import HeaderName from "./header-name";
import ChannelsSection from "./channels-section";

function LeftSide({ submitSendChannel, listChannel, username }) {
  return (
    <div>
      <HeaderName username={username} />
      <ChannelsSection
        submitSendChannel={submitSendChannel}
        listChannel={listChannel}
      />
    </div>
  );
}

export default LeftSide;
