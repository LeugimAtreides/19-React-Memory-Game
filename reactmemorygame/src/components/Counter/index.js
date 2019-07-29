import React from "react";
import Card from "react-bootstrap/Card"

// By extending the React.Component class, Counter inherits functionality from it
function Counter(props) {

  // Here we return the dummy component
  return (
    <Card style={{ height:'3rem', width:'12rem' }}>
      <Card.Body>
        <Card.Text>Score: {props.count}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Counter;
