/** @jsx jsx */

import React from "react";
import { jsx } from "@emotion/core";

function HeaderChannel({ name }) {
  return (
    <div
      css={{
        display: "flex",
        justifyContent: "space-between",
        height: 42,
        width: "100%",
        alignItems: "center",
        paddingTop: 11,
        paddingBottom: 7,
        borderBottom: "1px solid lightgray"
      }}
    >
      <div
        css={{
          marginBottom: 18,
          marginLeft: 18
        }}
      >
        {/* <i id="hamburguer" class="fas fa-bars" /> */}
        <p
          id="channel-title"
          css={{
            fontWeight: "bolder",
            fontSize: 18,
            margin: "0 0 10px 0",
            paddingLeft: 5
          }}
        >
          #{name}
        </p>
        <div
          css={{
            fontSize: 13,
            color: "#4d4d4d",
            visibility: "visible"
          }}
        >
          <i className="far fa-star" /> | <i className="far fa-user" /> 0 |
          <i className="fas fa-thumbtack" /> 0 | Add topic
        </div>
      </div>
      <div
        css={{
          display: "flex",
          alignItems: "center",
          color: "#4d4d4d",
          width: 400,
          justifyContent: "space-between"
        }}
      >
        <i className="fas fa-phone" />
        <i className="fas fa-info-circle" />
        <i className="fas fa-cog" />
        <div
          css={{
            height: 32,
            width: 195,
            borderRadius: "0.5em",
            paddingLeft: "0.5em",
            border: "1px solid rgb(110, 110, 110)",
            color: "rgb(196, 196, 196)",
            display: "flex",
            alignItems: "center",
            marginRight: 8,
            marginBottom: 3,
            visibility: "visible"
          }}
        >
          <i className="fas fa-search" />
          <span>Search</span>
        </div>
        <i className="fas fa-at" />
        <i className="far fa-star" />
        <i className="fas fa-ellipsis-v" />
      </div>
    </div>
  );
}

export default HeaderChannel;
