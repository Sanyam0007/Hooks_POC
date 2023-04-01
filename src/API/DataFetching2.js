import React, { useReducer , useEffect} from "react";
import axios from 'axios'

export const DataFetching2 = () => {
  const initialState = {
    loading: true,
    error: "",
    post: {},
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "success":
        return {
          loading: false,
          error: " ",
          post: action.payload,
        };
      case "error":
        return {
          loading: false,
          error: "Someting went wrong",
          post: null,
        };
    }
  };
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
       dispatch({type:"success" ,payload:response.data})
      })
      .catch((error) => {
          dispatch({type:"error"})
      });
  },[]);

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      DataFetching2
      <div>{state.loading ? "Loading please wait.." : state.post.title}</div>
      <div>{state.error ? "error ocurred while data fetching" : null}</div>
    </div>
  );
};
