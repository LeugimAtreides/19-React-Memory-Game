import React from "react";
import "./style.css";

function MemoryCard(props) {
  return (
    <div onClick={() => props.chooseCharacter(props.id)} className="card">
      <img alt={props.name} src={props.image} />
    </div>
  );
}

export default MemoryCard;
