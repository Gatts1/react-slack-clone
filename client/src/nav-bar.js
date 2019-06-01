/** @jsx jsx */
import React from 'react';
import logo from "./assets/slack_logo.png"
import { jsx } from "@emotion/core";

function NavBar() {
  return (
    <nav css={
      {
        height: "70px",
        width: "100%",
        background: "#ffffff",
        display: "flex",
        justifyContent: "space-between"
      }
    }>
      <div css={
        {
          display: "flex",
          justifyContent: "center"
        }
      }>
        <a href="#" css={
          {
            fontSize: "20px",
            fontWeight: "900",
            color: "black"
          }
        }>
          <img src={logo} alt="slack logo" css={
          {
            height: "55px",
            width: "200px",
            float: "left",
            margin: "5px 0 0 1rem"
          }}/>
        </a>
      </div>
      <ul css={
        {
          listStyleType: "none",
          margin: "0 20px 0 0",
          padding: "0",
          float: "right",
          lineHeight: "70px",
          display: "block"  
        }
      }>
        <li css={
          {
            display: "inline-block",
            justifyContent: "space-around",
            margin: "0 5px",
            boxSizing: "border-box"
          }
        }>
          <a href="#" css={
            {
              color: "rgb(185, 185, 185)",
              fontWeight: "900"
            }
          }>Product</a>
        </li>
        <li css={
          {
            display: "inline-block",
            justifyContent: "space-around",
            margin: "0 5px",
            boxSizing: "border-box"
          }
        }>
          <a href="#" css={
            {
              color: "rgb(185, 185, 185)",
              fontWeight: "900"
            }
          }>Pricing</a>
        </li>
        <li css={
          {
            display: "inline-block",
            justifyContent: "space-around",
            margin: "0 5px",
            boxSizing: "border-box"
          }
        }>
          <a href="#" css={
            {
              color: "rgb(185, 185, 185)",
              fontWeight: "900"
            }
          }>Support</a>
        </li>
        <li css={
          {
            display: "inline-block",
            justifyContent: "space-around",
            margin: "0 5px",
            boxSizing: "border-box"
          }
        }>
          <a href="#" css={
            {
              color: "rgb(185, 185, 185)",
              fontWeight: "900"
            }
          }>Codeable</a>
        </li>
        <li css={
          {
            display: "inline-block",
            justifyContent: "space-around",
            margin: "0 5px",
            boxSizing: "border-box"
          }
        }>
          <button>Sign In</button>
        </li>
      </ul>{' '}
    </nav>
  );
}

export default NavBar;
