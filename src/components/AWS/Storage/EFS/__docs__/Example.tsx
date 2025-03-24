import React, { FC } from "react";
  import EFS from "../EFS";
  
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
        <EFS width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  