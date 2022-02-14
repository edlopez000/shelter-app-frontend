import React from "react";

export default function AnimalIcon(props) {
  return (
    <div>
      <img src={require(`../../assets/${props.name}-icon.png`)} alt={props.name} />
    </div>
  );
}

