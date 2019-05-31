/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

import avatar from "./assets/user_icon.png";

function MessageBody({ author="Mancito", time="12:43", content="This is some content." }) {
  return (
    <div className="single-message-container" css={{ textAlign: "end" }}>
      <div
        className="single-message"
        css={{
          display: "flex",
          padding: "7px 15px 7px 15px",
          flexDirection: "row",
          justifyContent: "left"
        }}
      >
        <img
          src={avatar}
          alt="user's avatar"
          css={{ height: 36, width: 36, marginRight: 7, borderRadius: 3 }}
        />
        <div className="written-part-msg" css={{}}>
          <p className="message-item" css={{ textAlign: "left" }}>
            <span
              className="msg-author"
              css={{
                color: "#000000",
                paddingLeft: 2,
                fontsize: 15,
                fontWeight: "bold"
              }}
            >
              {author}
            </span>
            <span className="msg-date" css={{ fontsize: 12, paddingLeft: 2 }}>
              {time}
            </span>
          </p>
          <p
            className="msg-content"
            css={{ fontsize: 15, padding: 3, textAlign: "left" }}
          >
            {content}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MessageBody;
