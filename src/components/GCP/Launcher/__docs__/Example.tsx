import React, { FC } from "react";
  import Launcher from "../Launcher";
  
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
        <Launcher width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  