import React, { FC } from "react";
  import CloudNetwork from "../CloudNetwork";
  
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
        <CloudNetwork width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  