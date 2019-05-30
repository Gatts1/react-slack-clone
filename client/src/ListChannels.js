import React from "react";
import Channel from "./Channel";
import { link } from "fs";

function ListChannels() {

  const channelsFakeData = [
    {name: "General", id: 1},
    {name: "Varios", id: 2},
    {name: "Forobardo", id: 3},
    {name: "", id: 4}
  ]
  return <Channel />;
}

export default ListChannels;
