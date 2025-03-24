import React, { FC } from "react";
  import Devices from "../Devices";
  
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
        <Devices width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  