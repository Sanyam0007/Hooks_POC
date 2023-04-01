import React, { useState } from "react";
import "./FunctionalCounter.css";

export const FunctionalCounter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="functional_container">
      <p>I am a functional component</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click {count}{" "}
      </button>
    </div>
  );
};
