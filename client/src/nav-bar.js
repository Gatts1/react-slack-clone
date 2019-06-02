/** @jsx jsx */
import React from "react";
import logo from "./assets/slack_logo.png";
import { jsx } from "@emotion/core";

function NavBar() {
  return (
    <nav
      css={{
        height: "70px",
        width: "100%",
        background: "#fff",
        // display: "flex",
        // justifyContent: "space-between"
        position: "fixed",
        top: 0,
        zIndex: 99,
        transform: "translate3d(0,0,0)",
        transition: "transform 420ms cubic-bezier(.165,.84,.44,1)",
        boxShadow: "0 1px 1px rgba(0,0,0,.1)"
      }}
    >
      <a
        href="index.html" aria-label="Index"
        alt="Logo"
        css={{
          background: `url(${logo}) left top no-repeat`,
          backgroundSize: "106px 30px",
          backgroundPosition: "left bottom",
          height: 30,
          width: 106,
          margin: "20px 0 0 1rem",
          float: "left"
        }}
      >
        {" "}
      </a>
      <ul
        css={{
          listStyleType: "none",
          margin: "0 20px 0 0",
          padding: "0",
          float: "right",
          lineHeight: "70px",
          display: "block"
        }}
      >
        <li
          css={{
            display: "inline-block",
            justifyContent: "space-around",
            margin: "0 5px",
            boxSizing: "border-box"
          }}
        >
          <a
            href="#" aria-label="Index"
            css={{
              color: "rgb(185, 185, 185)",
              fontWeight: "900"
            }}
          >
            Product
          </a>
        </li>
        <li
          css={{
            display: "inline-block",
            justifyContent: "space-around",
            margin: "0 5px",
            boxSizing: "border-box"
          }}
        >
          <a
            href="#"
            css={{
              color: "rgb(185, 185, 185)",
              fontWeight: "900"
            }}
          >
            Pricing
          </a>
        </li>
        <li
          css={{
            display: "inline-block",
            justifyContent: "space-around",
            margin: "0 5px",
            boxSizing: "border-box"
          }}
        >
          <a
            href="#"
            css={{
              color: "rgb(185, 185, 185)",
              fontWeight: "900"
            }}
          >
            Support
          </a>
        </li>
        <li
          css={{
            display: "inline-block",
            justifyContent: "space-around",
            margin: "0 5px",
            boxSizing: "border-box"
          }}
        >
          <a
            href="#"
            css={{
              color: "rgb(185, 185, 185)",
              fontWeight: "900"
            }}
          >
            Codeable
          </a>
        </li>
        <li
          css={{
            display: "inline-block",
            justifyContent: "space-around",
            margin: "0 5px",
            boxSizing: "border-box"
          }}
        >
          <button>Sign In</button>
        </li>
      </ul>{" "}
    </nav>
  );
}

export default NavBar;
