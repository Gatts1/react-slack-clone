import React from "react";
import { render } from "react-dom";
import App from "./App";

// const $root = document.getElementById("root");
// render(<App url="ws://localhost:4000" />, $root);
import Header from "./header-channel";

const $root = document.getElementById("root");

render(<Header />, $root);
