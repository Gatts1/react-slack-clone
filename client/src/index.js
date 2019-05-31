import React from "react";
import { render } from "react-dom";
import App from "./App";
import Header from "./header-channel";
import ChannelElements from "./channel-element";

// const $root = document.getElementById("root");
// render(<App url="ws://localhost:4000" />, $root);

const $root = document.getElementById("root");

render(<ChannelElements />, $root);
