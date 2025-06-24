import React, { useState } from "react";

const child2 = () => {
  const [num, setNum] = useState(0);
  return (
    <div>
      <h1>This is the parent component</h1>
      <div style={{ display: "flex", gap: "20px" }}>
        <Child1>
            
        </Child1>
      </div>
    </div>
  );
};

export default child2;
