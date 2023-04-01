import React, { useState } from "react";

export const HooksCounter = () => {
  const [name, setname] = useState({ firstname: "", lastname: "" });
  return (
    <div>
      < form action="">
        <input
          type="text"
          value={name.firstname}
          onChange={(e) => setname({...name, firstname: e.target.value })}
        />
        <input
          type="text"
          value={name.lastname}
          onChange={(e) => setname({...name, lastname: e.target.value })}
        />
        <h2>This is firstname: {name.firstname}</h2>
        <h2>This is lastname: {name.lastname}</h2>
      </form>
    </div>
  );
};
