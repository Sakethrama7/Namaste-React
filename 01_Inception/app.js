const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React!"
);
// In the First Line {} -> It is Object. It is helpful to give attributes to our tags.
// Here we are creating React element. React Element is nothing but a Normal JS Object.
// So when you try to print that heading it will show an object.

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
// Here the job of the render method is take that heading element or react element or JS object and create that h1 tag which browser understands and put that inside the root ( which is passed inside the root element ).

// The costly operation in the web page is when DOM nodes needs to be manipulated.
// Adding some nodes into the DOM and removing some nodes from the DOM is the costly operation. And All these frameworks and libraries are trying to optimize this.
// React comes with the philosophy of writing (or) manipulating the DOM using JS or React.

/* 1.Create this using React 
   <div id="parent">
      <div id="child">
          <h1> Hello React!</h1>
      </div>
   </div>
*/

const parent1 = React.createElement(
  "div",
  {
    id: "parent1",
  },
  React.createElement(
    "div",
    { id: "child1" },
    React.createElement("h1", {}, "Hello React!")
  )
);

console.log(parent1);

const root1 = ReactDOM.createRoot(document.getElementById("root1"));
root1.render(parent1);

/* 2.Create this using React 
   <div id="parent">
      <div id="child">
          <h1> This is H1 Tag!</h1>
          <h2> This is H2 Tag!</h1>
      </div>
   </div>
*/

const parent2 = React.createElement(
  "div",
  {
    id: "parent2",
  },
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "This is H1 Tag!"),
    React.createElement("h2", {}, "This is H2 Tag"),
  ])
);

const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root2.render(parent2);

/* 3.Create this using React 
   <div id="parent3">
      <div id="child3">
          <h1> This is H1 Tag!</h1>
          <h2> This is H2 Tag!</h1>
      </div>
      <div id="child4">
          <h1> This is H1 Tag!</h1>
          <h2> This is H2 Tag!</h1>
      </div>
   </div>
*/

const parent3 = React.createElement(
  "div",
  {
    id: "parent3",
  },
  [
    React.createElement("div", { id: "child3" }, [
      React.createElement("h1", {}, "This is H1 Tag!"),
      React.createElement("h2", {}, "This is H2 Tag"),
    ]),
    React.createElement("div", { id: "child4" }, [
      React.createElement("h1", {}, "This is H1 Tag!"),
      React.createElement("h2", {}, "This is H2 Tag"),
    ]),
  ]
);

const root3 = ReactDOM.createRoot(document.getElementById("root3"));
root3.render(parent3);
