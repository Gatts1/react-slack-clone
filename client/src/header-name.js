import React from "react";

function HeaderName({username}) {
  return (
    <>
      <h1>Codeable</h1>
      <p>{username}</p>
    </>
  );
}

export default HeaderName;
