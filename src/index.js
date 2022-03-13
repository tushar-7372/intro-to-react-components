import React from "react";
import ReactDOM from "react-dom";
// importing Heading file
import Heading from "./Heading";

import List from "./List";
// here we will try to beak the react part into multiple components
// <img>if tha tag has some children in between</img>
// if it has no child in between it can also be written as <img/>

// creating a function for h1
// this function name should always start with capital to differentiate btw custom tags and html tags

// function Heading() {
//   return <h1>My Favourite Foods</h1>;
// }
// we can put this heading function in a separate file jsx file
// and we can import that file here just we did for react and reactDOM
//--initally this was there
// ReactDOM.render(
//   <div>
// {
/* for this h1 we will create a function and that function will return this heading */
// }
// {
/* <h1>My Favourite Foods</h1> */
// }
// {
/* now Heading function can be used in place for h1 */
// }
//     <Heading />
//     <ul>
//       <li>Bacon</li>
//       <li>Jamon</li>
//       <li>Noodles</li>
//     </ul>
//   </div>,
//   document.getElementById("root")
// );
//--till this part

// now we try to create components for list
ReactDOM.render(
  <div>
    <Heading />
    <List />
  </div>,
  document.getElementById("root")
);
