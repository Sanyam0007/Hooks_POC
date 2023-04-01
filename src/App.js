import "./App.css";
import React, { Component, useContext, useReducer } from "react";
// import { Effect1 } from "./Effects/Effect1";
// import { Effect2 } from "./Effects/Effect2";
// import Effect3 from "./Effects/Effect3";
// import { Effect4 } from "./Effects/Effect4";
// import { Effect5 } from "./Effects/Effect5";
// import ClassCounter from "./Counters/Classcounter";
// import { FunctionalCounter } from "./Counters/FunctionalCounter";
// import { HooksCounter } from "./Counters/HooksCounter";
// import { HooksCounter2 } from "./Counters/HooksCounter2";
// import { Context1 } from "./Context/Context1";
// import Context2 from "./Context/Context2";
// import { Reducer1 } from "./Reducer/Reducer1";
// import { Reducer2 } from "./Reducer/Reducer2";
import { ComponentA } from "./Components/ComponentA";
import { ComponentB } from "./Components/ComponentB";
import { ComponentC } from "./Components/ComponentC";
import { ComponentD } from "./Components/ComponentD";
import { DataFetching } from "./API/DataFetching";
import { DataFetching2 } from "./API/DataFetching2";
import { Memo1 } from "./Memo/Memo1";
import { UseRef1 } from "./Ref/UseRef1";
import { UseRef2 } from "./Ref/UseRef2";

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



export const CountContext = React.createContext()


export const UserContext = React.createContext;

function App() {
  const [count,dispatch] = useReducer(reducer,intialStage)
  return (
    // <CountContext.Provider value={{countState:count,countDispatch:dispatch}}>
    <div className="App">
      <UseRef2/>
      {/* <UseRef1/> */}
      {/* <DataFetching2/> */}
      {/* <Memo1/> */}
      {/* <DataFetching/> */}
      {/* <h1>Count: {count}</h1> */}
      {/* <ComponentA/>
      <ComponentB/>
      <ComponentC/> */}
      {/* <ClassCounter/> */}
      {/* <HooksCounter/> */}
      {/* <HooksCounter/> */}
      {/* <Effect1/> */}
      {/* <Effect3/> */}
      {/* <Effect4/> */}
      {/* <Effect5/> */}
      {/* <Context1/> */}
      {/* <UserContext.Provider value = "Sam">
    <Context2/>
    </UserContext.Provider>
    */}
      {/* <Reducer1/> */}
      {/* <Reducer2/>? */}
      {/* <FunctionalCounter/> */}
    </div>
    // </CountContext.Provider>
  );
}

export default App;
