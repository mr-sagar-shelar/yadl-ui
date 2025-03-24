import React, { FC } from "react";
  import Mornings from "../Mornings";
  
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
        <Mornings width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  