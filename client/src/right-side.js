import React from 'react';
import {jsx} from '@emotion/core';

import HeaderChannel from "./header-channel";
import ChannelElement from "./channel-element";

function RightSide() {
  return (
    <HeaderChannel />
    <ChannelElement />
  );
}

export default RightSide;