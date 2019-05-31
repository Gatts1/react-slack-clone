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
        {/* <i id="hamburguer" class="fas fa-bars" /> */}
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
      <div
        className="channel-options"
        css={{
          display: "flex",
          alignItems: "center",
          color: "#4d4d4d",
          width: 400,
          justifyContent: "space-between"
        }}
      >
        <FontAwesomeIcon icon="phone" /> {/* <i class="fas fa-phone" /> */}
        <FontAwesomeIcon icon="info-circle" />{" "}
        {/* <i class="fas fa-info-circle" /> */}
        <FontAwesomeIcon icon="cog" /> {/* <i class="fas fa-cog" /> */}
        <div
          className="search-box"
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
          <FontAwesomeIcon icon="search" /> {/* <i class="fas fa-search" /> */}
          <span css={{ marginLeft: 5, fontSize: 15, color: "#666666" }}>
            Search
          </span>
        </div>
        <FontAwesomeIcon
          icon="at"
          css={{
            color: "white",
            strokeWidth: "20",
            stroke: "black"
          }}
        />{" "}
        {/* <i class="fas fa-at" /> */}
        <FontAwesomeIcon
          icon="star"
          css={{
            color: "white",
            strokeWidth: "20",
            stroke: "black"
          }}
        />{" "}
        {/* <i class="far fa-star" /> */}
        <FontAwesomeIcon
          icon="ellipsis-v"
          css={{
            color: "white",
            strokeWidth: "20",
            stroke: "black"
          }}
        />{" "}
        {/* <i class="fas fa-ellipsis-v" /> */}
      </div>
    </div>
  );
}

export default HeaderChannel;
