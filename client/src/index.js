import React from "react";
import { render } from "react-dom";

// import App from "./App";

// const $root = document.getElementById("root");
// render(<App url="ws://localhost:4000" />, $root);
import Header from "./header-channel";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fas,
  faStar,
  faUser,
  faThumbtack
} from "@fortawesome/free-solid-svg-icons";

library.add(fas, faStar, faUser, faThumbtack);

const $root = document.getElementById("root");

render(<Header />, $root);
