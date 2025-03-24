import React, { FC } from "react";
  import CloudDirectory from "../CloudDirectory";
  
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
        <CloudDirectory width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  