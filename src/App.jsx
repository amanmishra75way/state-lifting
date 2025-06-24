import React, { useState } from "react";
import Child1 from "./Child1";
import child2 from "./child2";

const App = () => {
  const [number, setNumber] = useState(0);
  return (
    <div>
      <h1>This is the parent component</h1>
      <div style={{ display: "flex", gap: "20px" }}>
        <Child1 number={number} setNumber={setNumber} />
        <child2 props={{ number, setNumber }} />
      </div>
    </div>
  );
};

export default App;
