import { use, useState } from "react";

const User = (props) => {
  const [count] = useState(0);
  const [count1] = useState(1);
  return (
    <div className="user-card">
      <h2>Name : {props.name}</h2>
      <h3>Location : Hyderabad</h3>
      <h4>Contact : @sakethrama</h4>
      <h4>Count : {count}</h4>
      <h4>Count : {count1}</h4>
    </div>
  );
};

export default User;
