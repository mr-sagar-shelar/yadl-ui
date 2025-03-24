import React, { FC } from "react";
  import Mindaro from "../Mindaro";
  
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
        <Mindaro width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  