import React from "react";
import "../Counter/style.css";
import Badge from "react-bootstrap/Badge";

// By extending the React.Component class, Counter inherits functionality from it
function Counter(props) {

  // Here we return the dummy component
  return (
    <h1><Badge variant="danger">Score: {props.count}</Badge></h1>
  );
}

export default Counter;
