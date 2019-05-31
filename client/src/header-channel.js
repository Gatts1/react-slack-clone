/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
          marginTop: 10,
          marginLeft: 18
        }}
      >
        <p
          id="channel-title"
          css={{
            fontWeight: "bolder",
            fontSize: 18,
            marginBottom: 2,
            paddingLeft: 5
          }}
        >
          #general
        </p>
        <div
          css={{
            fontSize: 13,
            color: "#4d4d4d",
            visibility: "visible"
          }}
        >
          <FontAwesomeIcon
            icon="star"
            css={{
              color: "white",
              strokeWidth: "20",
              stroke: "black"
            }}
          />{" "}
          |{" "}
          <FontAwesomeIcon
            icon="user"
            css={{
              color: "white",
              strokeWidth: "20",
              stroke: "black"
            }}
          />{" "}
          0 |
          <FontAwesomeIcon icon="thumbtack" /> 0 | Add topic
        </div>
      </div>
      <div class="channel-options">
        <i class="fas fa-phone" />
        <i class="fas fa-info-circle" />
        <i class="fas fa-cog" />
        <div class="search-box">
          <i class="fas fa-search" />
          <span>Search</span>
        </div>
        <i class="fas fa-at" />
        <i class="far fa-star" />
        <i class="fas fa-ellipsis-v" />
      </div>
    </div>
  );
}

export default HeaderChannel;
