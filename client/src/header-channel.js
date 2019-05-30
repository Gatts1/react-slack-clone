import React from "react";

function HeaderChannel() {
  return (
    <div class="header">
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
