import React, { FC } from "react";
  import CloudTestLab from "../CloudTestLab";
  
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
        <CloudTestLab width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  