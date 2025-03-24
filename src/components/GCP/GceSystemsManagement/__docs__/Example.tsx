import React, { FC } from "react";
  import GceSystemsManagement from "../GceSystemsManagement";
  
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
        <GceSystemsManagement width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  