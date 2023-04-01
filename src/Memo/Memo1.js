import React, { useMemo, useState } from "react";

export const Memo1 = () => {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  const counterOne = () => {
    setCountOne(countOne + 1);
  };
  const counterTwo = () => {
    setCountTwo(countTwo + 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) {
      i++;
    }
    if(countOne%2===0)return true
    return false
  }, [countOne]);
  return (
    <div>
      <button
        onClick={() => {
          setCountOne(countOne + 1);
        }}
      >
        Count 1:{countOne}
      </button>
      <span> {isEven ? " Even" : " odd"}</span>

      <button onClick={() => setCountTwo(countTwo + 1)}>
        Count 2: {countTwo}
      </button>
    </div>
  );
};
