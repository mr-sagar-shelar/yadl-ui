import React, { FC } from "react";
  import Messaging from "../Messaging";
  
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
        <Messaging width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  