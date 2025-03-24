import React, { FC } from "react";
  import CloudTest from "../CloudTest";
  
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
        <CloudTest width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  