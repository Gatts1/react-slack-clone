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
      <div class="channel-info">
        <i id="hamburguer" class="fas fa-bars" />
        <p class="channel-title" id="channel-title">
          #general
        </p>
        <div class="quick-options-and-topics">
          <i class="far fa-star" /> | <i class="far fa-user" /> 0 |
          <i class="fas fa-thumbtack" /> 0 | Add topic
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
