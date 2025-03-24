import React, { FC } from "react";
  import Troubleshoot from "../Troubleshoot";
  
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
        <Troubleshoot width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  