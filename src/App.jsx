import React, { useState } from "react";
import Child1 from "./Child1";
import Childdecrement from "./Childdecrement";

const App = () => {
  const [number, setNumber] = useState(0);
  return (
    <div>
      <h1>This is the parent component where no is. {number}</h1>
      <div style={{ display: "flex", gap: "20px" }}>
        <Child1 number={number} setNumber={setNumber} />
        <Childdecrement props={{ number, setNumber }} />
      </div>
    </div>
  );
};

export default App;
