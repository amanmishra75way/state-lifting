import React from "react";

const Child2 = ({ props }) => {
  return (
    <div>
      <button onClick={() => props.setNumber(props.number - 1)}>-</button>
    </div>
  );
};

export default Child2;
