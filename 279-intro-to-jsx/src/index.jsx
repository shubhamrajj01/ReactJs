// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
// var React = require("react");
// var ReactDOM = require("react-dom");

import React from "react";
import ReactDOM from "react-dom";

////Render Syntax:   .render(WHAT TO SHOW, WHERE TO SHOW IT)
ReactDOM.render(<h1>Hello World!</h1>, document.getElementById("root"));
////Alternate method to do it using Javascript
var h1 = document.createElement("h1");
h1.innerHTML = "Hello World!";
document.getElementById("root").appendChild(h1);

// ReactDOM.render(<h1>Hello World!</h1> <p>This is a new paragraph</p>, document.getElementById("root"));//This will give us an error as rendor doesn't support multiple elements in What to Show.
//To solve this problem we will store all the elements in a single div.
ReactDOM.render(
  <div>
    <h1>Hello World!</h1>
    <p>This is a new paragraph</p>
  </div>,
  document.getElementById("root"),
);
