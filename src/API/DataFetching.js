import React, { useEffect, useState } from "react";
import axios from "axios";

export const DataFetching = () => {
    const [loading, setLoading] = useState(true);
const [error, setError] = useState("");
const [post, setPost] = useState({});

useEffect(() => {
  axios
    .get("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => {
      setLoading(false);
      setError("");
      setPost(response.data);
    })
    .catch((error) => {
        setLoading(false)
        setError('Error while loading')
        setPost({})
    });
},[]);

  return <div>DataFetching...
    <div>{loading?"Loading please wait..":post.title}</div>
    <div>{error?"error ocurred while data fetching":null}</div>
  </div>;
};
