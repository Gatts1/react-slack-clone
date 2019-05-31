/** @jsx jsx  */
import React from 'react';
import { jsx } from '@emotion/core';
import MessageSend from "./MessageSend";


function MessageSection() {
  return(
  <>
  <div css=
  {{height: "73vh",
  width: "80%",
  float: "right"
  }}>
  <MessageSend/>
  </div>
  
  </>
  )
}

export default MessageSection;