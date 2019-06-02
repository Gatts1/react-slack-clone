/**@jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

function SeparatorDate({ date }) {
  const $now = new Date();
  const $today = $now.toLocaleDateString();
  $now.setDate($now.getDate() - 1);

  const $yesterday = $now.toLocaleDateString();

  // date = new Date(date);
  let dateFormatted = date.toDateString();
  if (date.toLocaleDateString() === $today) dateFormatted = "Today";
  if (date.toLocaleDateString() === $yesterday) dateFormatted = "Yesterday";

  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        paddingTop: 20,
        paddingBottom: 40,
        width: "100%"
      }}
    >
      <div
        css={{
          position: "absolute",
          backgroundColor: "white",
          zIndex: 2
        }}
      >
        {dateFormatted}
      </div>
      <hr
        css={{
          position: "absolute",
          top: 22,
          width: "100%",
          zIndex: 1
        }}
      />
    </div>
  );
}

export default SeparatorDate;
