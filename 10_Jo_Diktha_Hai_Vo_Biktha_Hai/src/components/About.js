import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor");
  }

  componentDidMount() {
    //  console.log("Parent Component Did Mount");
  }

  render() {
    // console.log("Parent Render");
    return (
      <div>
        <h1>About</h1>
        <h2>This is Namaste React Series.</h2>
        {/* This is a functional component
             <User name={"Saketh Rama (Function)"} /> 
         */}

        <UserClass name={"Saketh Rama (Class)"} />
        {
          // <UserClass name={"Ranga (Class)"} />
        }
      </div>
    );
  }
}

export default About;

/*
   Life cycle when multiple childrens are present :
   You think this is the order :
      Parent Constructor
      Parent Render
         Saketh Rama Child Constructor
         Saketh Rama Child Render
         Saketh Rama Child Component Did Mount
         Ranga Child Constructor
         Ranga Child Render
         Ranga Child Component Did Mount
      Parent Component Did Mount

    But the above order is wrong. Why? 
    Refer react lifecycle diagram. Here are there are two childs so the react will batch the render phase of the both childs and then batch the commit phase of these childs.
    Render phase is fast compared to commit phase. 
    Manipulating the DOM or updating the DOM is expensive. so react tries to batch up the render for childs. This is why react is fast.

    Correct order:
      Parent Constructor
      Parent Render
         Saketh Rama Child Constructor
         Saketh Rama Child Render
         Ranga Child Constructor
         Ranga Child Render
         Saketh Rama Child Component Did Mount
         Ranga Child Component Did Mount
      Parent Component Did Mount

*/
