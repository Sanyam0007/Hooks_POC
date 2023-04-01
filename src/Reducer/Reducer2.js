import React, { useReducer } from "react";

const intialStage = {
  counterOne: 0,
  counterTwo: 7,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, counterOne: state.counterOne + action.value };
    case "decrement":
      return { ...state, counterOne: state.counterOne - action.value };
    case "increment2":
      return { ...state, counterTwo: state.counterTwo + action.value };
    case "decrement2":
      return { ...state, counterTwo: state.counterTwo - action.value };
    case "reset":
      return intialStage;
    default:
      return state;
  }
};

export const Reducer2 = () => {
  const [count, dispatch] = useReducer(reducer, intialStage);
  return (
    <div>
      <h1>CountOne: {count.counterOne}</h1>
      <h1>CountTwo: {count.counterTwo}</h1>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "increment", value: 5 })}>
        Increment 5
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
        Decrement 5
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <div>
        <button onClick={() => dispatch({ type: "increment2", value: 1 })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "decrement2", value: 1 })}>
          Decrement
        </button>
      </div>
    </div>
  );
};
