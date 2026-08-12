import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
  "div",
  {
    id: "parent",
  },
  [
    React.createElement("div", { id: "child1", key: "child-1" }, [
      React.createElement("h1", { key: "h1-1" }, "This is H1 Tag!"),
      React.createElement("h2", { key: "h2-1" }, "This is H2 Tag"),
    ]),
    React.createElement("div", { id: "child2", key: "child-2" }, [
      React.createElement("h1", { key: "h1-2" }, "This is H1 Tag!"),
      React.createElement("h2", { key: "h2-2" }, "This is H2 Tag"),
    ]),
  ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
