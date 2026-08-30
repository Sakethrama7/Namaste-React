import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"; // here even if you don't write .js extension react will treat as javascript file.
import Body from "./components/Body";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
