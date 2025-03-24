import React, { FC } from "react";
  import ECSAnywhere from "../ECSAnywhere";
  
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
        <ECSAnywhere width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  