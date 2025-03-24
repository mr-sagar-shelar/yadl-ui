import React, { FC } from "react";
  import DataFactories from "../DataFactories";
  
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
        <DataFactories width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  