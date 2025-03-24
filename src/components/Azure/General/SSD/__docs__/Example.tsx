import React, { FC } from "react";
  import SSD from "../SSD";
  
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
        <SSD width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  