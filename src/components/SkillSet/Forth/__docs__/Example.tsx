import React, { FC } from "react";
  import Forth from "../Forth";
  
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
        <Forth width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  