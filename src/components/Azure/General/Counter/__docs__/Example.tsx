import React, { FC } from "react";
  import Counter from "../Counter";
  
  const Example = () => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Counter width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  