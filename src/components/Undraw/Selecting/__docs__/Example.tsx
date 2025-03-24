import React, { FC } from "react";
  import Selecting from "../Selecting";
  
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
        <Selecting width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  