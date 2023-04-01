import React, { useReducer } from "react";

export const Reducer1 = () => {
  const intialStage = 0;
  const reducer = (state, action) => {
    switch (action) {
      case "increment":
        return state + 1;
      case "decrement":
        return state - 1;
      case "reset":
        return intialStage;
      default:
        return state;
    }
  };

  const [count, dispatch] = useReducer(reducer, intialStage);
  return (
    <div><h1>Count: {count}</h1>
      <button onClick={()=>dispatch('increment')}>Increment</button>
      <button onClick={()=>dispatch('decrement')}>Decrement</button>
      <button onClick={()=>dispatch('reset')}>Reset</button>
    </div>
  );
};
