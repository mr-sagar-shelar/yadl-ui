import React, { FC } from "react";
  import IoTHub from "../IoTHub";
  
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
        <IoTHub width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  