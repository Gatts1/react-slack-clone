/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

import avatar from "./assets/user_icon.png";

function MessageBody({ author, time, content }) {
  return (
    <div className="single-message-container" css={{ textAlign: "end" }}>
      <div
        css={{
          display: "flex",
          padding: "7px 15px 7px 15px",
          flexDirection: "row",
          justifyContent: "left",
          "&:hover": {
            backgroundColor: "rgb(226, 227, 220)"
          }
        }}
      >
        <img
          src={avatar}
          alt="user's avatar"
          css={{ height: 36, width: 36, marginRight: 7, borderRadius: 3 }}
        />
        <div className="written-part-msg" css={{}}>
          <p css={{ textAlign: "left", margin: 0 }}>
            <span
              css={{
                color: "#000000",
                paddingLeft: 2,
                fontSize: 15,
                fontWeight: "bold",
                textAlign: "left"
              }}
            >
              {author}
            </span>
            <span
              css={{
                fontSize: 12,
                paddingLeft: 2,
                color: "#848385",
                textAlign: "left"
              }}
            >
              {time}
            </span>
          </p>
          <p css={{ fontSize: 15, padding: 3, textAlign: "left", margin: 0 }}>
            {content}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MessageBody;
