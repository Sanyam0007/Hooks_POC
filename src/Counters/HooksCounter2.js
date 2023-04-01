import React, { useState } from "react";

export const HooksCounter2 = () => {
  const [item,setItem] = useState([]);

  const addItem = () => {
    setItem([
      ...item,
      {
        id: item.length,
        val: Math.floor(Math.random() * 10)+1,
      },
    ]);
  };
  return (
    <div>
        {console.log(item)}
      <button onClick={addItem}>Add Item</button>
      <ul>
        {item.map(myItem => (
          <li key={myItem.id}>{myItem.val}</li>
        ))}
      </ul>
      
    </div>
  );
};
