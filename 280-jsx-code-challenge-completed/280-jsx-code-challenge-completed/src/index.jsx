//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.

import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1>React App</h1>
    <ul>
      <li>Unorder List 1</li>
      <li>Unorder List 2</li>
      <li>Unorder List 3</li>
    </ul>
    <ol>
      <li>Ordered List1</li>
      <li>Ordered List 2</li>
      <li>Ordered List 3</li>
    </ol>
  </div>,
  document.getElementById("root"),
);
