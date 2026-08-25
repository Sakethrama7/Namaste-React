import React from "react";
import ReactDOM from "react-dom/client";

// Creating React Element using React Core.
// This React.createElement() creates the React Element which is also known as JS-Object. Then it is rendered as an HTML Element.
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React using React Core!"
);

// Creating React Element using JSX.
// JSX is not HTML inside JS. JSX is different from HTML. JSX is HTML or XML like syntax. JSX is mix of HTML and JS.
// when ( <h1>Namaste React using JSX!</h1> ) this piece of code gets executed then it becomes React element.
// jsx_heading is a React element.
// Generally browser or JS Engine does not understand this JSX code because it is not a pure JS code. Then how is this code executing or working? Parcel is doing the job behind the scenes.
// This code is transpiled even before it reaches JS Engine and then JS Engine receives the code that browser can understands. Transpiled means this code is converted in to the code that react or browser can understands.
// Transpiling is done by parcel. Also parcel itself does not do this thing . Inside parcel there is babel which does this transpiling.
// Babel converts JSX code to React.createElement().
// Here the JSX code is trnaspiled to React.createElement() and then this React.createElement() creates React Element which is also known as JS-Object and then it is rendered as a HTML Element using React DOM.
// HTML and JSX is different from one another. In JSX if you want to add class as an attribute you should use className, where as in HTML we use attribute as class.
// In JSX if you want to write any attribute you have to use CamelCase.
// If you want to write JSX in single line then no need to use parenthesis. But when you write JSX code in multiple lines then you need to use parenthesis because babel needs to understand where our code starts and ends.

const jsx_heading = (
  <h1 id="heading" className="head">
    Namaste React using JSX with React Element!
  </h1>
);

const Title = () => {
  return <h1 id="title">Namaste React Using JSX with Functional Component!</h1>;
};

// React Component
// Everthing in the React is component --> If you create a web page in that button ,heading ,title ,footer ,card ,input box ,search bar is a components.
/* 
   There are two types of Components : 
   1.Class Based Components --> Old
   2.Functional Based Components --> New

   -> React Functional Component : It is nothing but the normal JS Function which returns some JSX.
      Any Component in the React is named in Capital Letter otherwise it will give error.
*/
const HeadingComponent = () => {
  return <h1> Namaste React FUnctional Component </h1>;
};

const number = 10000;

// This both HeadingComponent1 and HeadingComponent2 are same. They are two different types of syntaxs. Both are correct.
// This is Component Composition (means composing two components)
// Here inside the {} in JSX you can write any JS expression. you can inject any JS code in this curly braces {}.
// Writing JS in JSX is very powerful thing.
// you can call Title component as <Title/> , <Title></Title> and {Title()}.
const HeadingComponent2 = () => (
  <div id="container">
    <Title />
    <h2>{number}</h2>
    {jsx_heading}
    <h1 className="heading"> Namaste React Functional Component </h1>
  </div>
);

/*  
   Here in the instead of using Arrow function you can also use a normal function. But using of Arrow Function is better.

   const HeadingComponent2 = function(){
     return (
       <div id="container">
         <Title />
         <h1 className="heading"> Namaste React Functional Component </h1>
       </div>
     ); 
   };

*/

const root = ReactDOM.createRoot(document.getElementById("root"));

// This is the way to render the React Element onto the page or browser.
// root.render(jsx_heading);

// This is the way to render the React Component onto the page or browser.
root.render(<HeadingComponent2 />);
