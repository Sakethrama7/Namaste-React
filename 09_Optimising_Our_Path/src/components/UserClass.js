import React from "react";

/*
   This class is to create class component.
   This is the way to create a class Component --> class ComponentName extends React.Component{}
   This render() method will return a piece of JSX which will be displayed on UI.
   This React.Component is a class which given to us by React and UserClass is inheriting some properties from it.
   To recieve props in Class Component you need to create a constructor which recieves those props.

   Question : Why do you always write super(props) in class component?

   The best place to create a props and state variables is constructor in Class component.
   In class components we can't use hooks because at that time there are no hooks. So in class components we create state variables using this.state

   life cycle of class component : Whenever this class component gets called, First the constructor of this UserClass gets called and then the render() gets called and then componentDidMount() gets called.
   constructor --> render() --> componentDidMount()
*/

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    // you can create a multiple state variables inside this object.
    this.state = {
      count: 0,
      userInfo: {
        name: "Username",
        location: "Default",
      },
    };
    // console.log(this.props.name + " Child Constructor");
  }

  async componentDidMount() {
    // console.log(this.props.name + " Child Component Did Mount");
    // This medthod is used to make an API call. In functional Component we use useEffect() but here we use this method. After rendering method is done then this componentDidMount() method is called.
    // To make make an API call make this function as async
    const data = await fetch("https://api.github.com/users/sakethrama7");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }

  componentDidUpdate() {
    console.log("Component Did Update");
  }

  componentWillUnmount() {
    console.log("Component will unmount");
  }

  render() {
    // const { name } = this.props;
    // const { count } = this.state;
    const { name, location, avatar_url } = this.state.userInfo;
    // console.log(this.props.name + " Child Render");
    return (
      <div className="user-card">
        {/*
        <h1>Count : {count}</h1>
        <button
          onClick={() => {
            // Never update state variables directly ( this.state.count = this.state.count + 1);
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase Count
        </button>
        */}
        <img src={avatar_url}></img>
        <h2>Name : {name}</h2>
        <h3>Location : {location}</h3>
        <h4>Contact : @sakethrama</h4>
      </div>
    );
  }
}

export default UserClass;

/* life cycle of a component : Open the image of that lifecyle and read these point.
 -> Mounting Cycle
   1. As soon as the UserClass was loaded. The constructor of this class component was called.
   2. Now the state variables are created with some default values.
   3. Now Render happens --> The state variables has the default values so the render happens with the default values. ( Here component renders with some dummy or default data.)
   4. Now the componentDidMount was called. ( Here Mounting Cycle is finished. In Mounting cycle our component is rendered once.)

 -> Updating Cycle
   5. Now inside this componentDidMount() the api call was made.
   6. Then setState() is called. Which updates the state variable.
   7. When this state variable gets updated React triggers the render once again.
   8. Now the component is rendered with updated values.
   9. Now React will update the DOM with the new values. ( It means the HTML is loaded with new API data)
   10. Then componentDidUpdate is called.

 -> UnMounting Cycle
    This method is called just before the unMounting.

-> Mounting means showing in the UI.
   UnMounting means removing from the UI.

Remember this point : This component life cycle is only for class components and not for functional components.
*/
