import React, { FC } from "react";
  import Versions from "../Versions";
  
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
        <Versions width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  