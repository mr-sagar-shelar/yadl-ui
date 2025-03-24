import React, { FC } from "react";
  import CloudStorage from "../CloudStorage";
  
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
        <CloudStorage width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  