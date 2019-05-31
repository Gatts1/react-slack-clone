import React from "react";
import { render } from "react-dom";
<<<<<<< HEAD
<<<<<<< HEAD
import App from "./App";

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

<<<<<<< HEAD
=======
=======
// import App from "./App";

// const $root = document.getElementById("root");
// render(<App url="ws://localhost:4000" />, $root);
>>>>>>> Add fontawesome components and styles
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

>>>>>>> Add component
=======
>>>>>>> Add component
render(<Header />, $root);
