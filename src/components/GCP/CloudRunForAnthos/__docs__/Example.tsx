import React, { FC } from "react";
  import CloudRunForAnthos from "../CloudRunForAnthos";
  
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
        <CloudRunForAnthos width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  