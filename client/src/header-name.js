/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

function HeaderName({ username }) {
  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        paddingTop: "10px",
        paddingBottom: "9px",
        width: "100%",
        paddingLeft: "20px"
      }}
    >
      <p
        css={{
          fontSize: "18px",
          fontWeight: "bold",
          display: "flex",
          alignItems: "center",
          color: "white"
        }}
      >
        Codeable{" "}
        <i
          className="fas fa-chevron-down"
          css={{ color: "#a7a3a8", fontSize: "8px", marginLeft: "6px" }}
        />
      </p>
      <p
        css={{
          color: "#a7a3a8",
          display: "flex",
          alignItems: "center",
          fontSize: "13px",
          marginTop: "5px",
          "&:hover": {
            color: "white"
          }
        }}
      >
        <i
          className="fas fa-circle"
          css={{
            color: "rgb(70, 168, 127)",
            fontSize: "9px",
            marginRight: "5px"
          }}
        />{" "}
        {username}
      </p>
    </div>
  );
}

export default HeaderName;
