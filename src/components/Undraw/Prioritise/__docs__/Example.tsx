import React, { FC } from "react";
  import Prioritise from "../Prioritise";
  
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
        <Prioritise width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  