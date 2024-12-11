import React from "react";
import "./Card.css";
const Card = ({ children, name }) => {
  console.log("hello");
 function handleClick()
{
console.log("hello world");

}
  return (
    <div className="card">
      <h2> {name}</h2>
      <p>{children}</p>
      <button onClick={handleClick}>click</button>
    </div>
  );
};

export default Card;
