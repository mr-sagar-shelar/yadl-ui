import React, { FC } from "react";
  import Outpostsrack from "../Outpostsrack";
  
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
        <Outpostsrack width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  