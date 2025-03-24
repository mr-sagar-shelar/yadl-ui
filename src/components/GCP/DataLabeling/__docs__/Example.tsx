import React, { FC } from "react";
  import DataLabeling from "../DataLabeling";
  
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
        <DataLabeling width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  