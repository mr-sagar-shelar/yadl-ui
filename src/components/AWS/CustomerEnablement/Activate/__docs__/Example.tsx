import React, { FC } from "react";
  import Activate from "../Activate";
  
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
        <Activate width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  