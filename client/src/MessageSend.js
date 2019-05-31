/** @jsx jsx  */
import React from 'react';
import { jsx } from '@emotion/core';

function MessageSend() {
  return (
    <>
      <div
        css={{
          overflowY: 'auto',
          overflowX: 'hidden',
          height: '90%',
          width: '98%',
          paddingLeft: '15px',
          textAlign: 'end'
        }}
      />
      <div>
        <form autocomplete="off">
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
