import React, { useState } from "react";
import Child1 from "./Child1";

const App = () => {
  const [number, setNumber] = useState(0);
  return (
    <div>
      <h1>This is the parent component</h1>
      <div style={{ display: "flex", gap: "20px" }}>
        <Child1 number={number} setNumber={setNumber} />
      </div>
    </div>
  );
};

export default App;
