import React, { useState, useEffect } from "react";
import axios from "axios";

export const Effect5 = () => {
  const [post, getPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromButtonChange,setidFromButtonChange] = useState(0)

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonChange}`)
      .then((res) => {
        getPost(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idFromButtonChange]);
  
  const getDataHandle=()=>{
    setidFromButtonChange(id)
  }

  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={getDataHandle}>Fetch Data</button>
      <div>{post.title}</div>
      {/* <ul>
        {posts.map(post=>(
            <li key={post.id}>{post.title}</li>
        ))}
      </ul> */}
    </div>
  );
};
