/** @jsx jsx  */
import React from 'react';
import { jsx } from '@emotion/core';


function MessageSend() {
    let inputElement = document.getElementById("input-message");
    let inputMessage = inputElement.value;
    if (inputMessage != "") {
      send(inputMessage);
      inputElement.parentElement.reset();
    }
  
  return (
    <>
      <div 
        css=
        {{
          overflowY: 'auto',
          overflowX: 'hidden',
          height: '90%',
          width: '98%',
          paddingLeft: '15px',
          textAlign: 'end'
        }}>
      </div>
      <div class="input-msg">
        <form
          class="input-detail"
          action="javascript:makeComment();"
          autocomplete="off"
        >
          <label for="input-message" aria-label="write a message" />
          <input
            css={{
              width: '89%',
              padding: '15px',
              borderRadius: '10px'
            }}
            type="text"
            id="input-message"
            class="input-message"
            placeholder="&#65291; |  Message #general"
          />
        </form>
      </div>
    </>
  );
}

export default MessageSend;
