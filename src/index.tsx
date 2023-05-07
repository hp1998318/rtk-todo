import React from "react";
// import ReactDom from "react-dom";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "app/store";
import "./index.css";

const container = document.getElementById("root");
const App = require("./app/App").default;
const root = createRoot(container!);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// react17
// function render() {
//   const App = require("./app/App").default;
//   ReactDom.render(
//     <Provider store={store}>
//       <App />
//     </Provider>,
//     document.getElementById("root")
//   );
// }
// render();
