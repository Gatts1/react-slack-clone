/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import NavBar from "./nav-bar";

function Login({ setUsername }) {
  function handleOnSubmit(event) {
    event.preventDefault();
    setUsername(event.target.elements.user.value);
  }

  return (
    <>
      <NavBar />
      <div
        css={{
          width: "37%",
          color: "#333333",
          margin: "0 auto",
          alignItems: "center",
          justifyContent: "space-around",
          display: "flex",
          flexWrap: "wrap",
          height: "60%",
          padding: "6rem 2rem"
        }}
      >
        <form
          name="login"
          id="login-form"
          onSubmit={handleOnSubmit}
          css={{
            backgroundColor: "#fff",
            bordeRadius: "0.25rem",
            boxShadow: "0 1px 0 rgba(0, 0, 0, 0.25)",
            padding: "2rem 2rem 1rem",
            margin: "0 auto 2rem",
            position: "relative",
            border: "1px solid #ddd"
          }}
        >
          <div
            css={{
              textAlign: "center",
              fontSize: "18px"
            }}
          >
            <h1>Sign in to Codeable</h1>
            <p>codeable.slack.com</p>
            <p>Enter your username</p>
            <input
              id="my_user"
              name="user"
              type="text"
              placeholder="username"
              css={{
                lineHeight: "1.5em",
                border: "1px solid gray",
                fontSize: "1.1em",
                fontWeight: "600",
                padding: "0.5em",
                borderRadius: "0.25rem",
                marginBottom: "5px"
              }}
            />
          </div>
          <button
            type="submit"
            value="Continue &#8594;"
            css={{
              background: "#237b5a",
              width: "360px",
              height: "50px",
              color: "white",
              fontSize: "20px",
              fontWeight: "900"
            }}
          >
            Sign In
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
