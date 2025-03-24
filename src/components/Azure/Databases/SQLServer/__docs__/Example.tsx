import React, { FC } from "react";
  import SQLServer from "../SQLServer";
  
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
        <SQLServer width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  