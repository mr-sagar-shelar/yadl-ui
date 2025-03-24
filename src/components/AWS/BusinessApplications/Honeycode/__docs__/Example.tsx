import React, { FC } from "react";
  import Honeycode from "../Honeycode";
  
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
        <Honeycode width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  