import React, { FC } from "react";
  import WebAppDatabase from "../WebAppDatabase";
  
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
        <WebAppDatabase width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  