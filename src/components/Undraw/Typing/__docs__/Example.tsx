import React, { FC } from "react";
  import Typing from "../Typing";
  
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
        <Typing width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  