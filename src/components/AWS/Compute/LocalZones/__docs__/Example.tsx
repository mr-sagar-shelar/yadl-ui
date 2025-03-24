import React, { FC } from "react";
  import LocalZones from "../LocalZones";
  
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
        <LocalZones width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  