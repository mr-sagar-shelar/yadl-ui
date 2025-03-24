import React, { FC } from "react";
  import Capacity from "../Capacity";
  
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
        <Capacity width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  