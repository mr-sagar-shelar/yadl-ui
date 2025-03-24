import React, { FC } from "react";
  import AppConfiguration from "../AppConfiguration";
  
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
        <AppConfiguration width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  