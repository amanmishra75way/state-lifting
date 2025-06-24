import React from "react";

const child2 = ({ props }) => {
  return (
    <div>
      <button onClick={() => props.setNumber(props.number - 1)}>-</button>
    </div>
  );
};

export default child2;
