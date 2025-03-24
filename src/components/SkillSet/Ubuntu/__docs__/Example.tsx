import React, { FC } from "react";
  import Ubuntu from "../Ubuntu";
  
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
        <Ubuntu width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  