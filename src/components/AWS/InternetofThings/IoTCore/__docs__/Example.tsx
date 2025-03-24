import React, { FC } from "react";
  import IoTCore from "../IoTCore";
  
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
        <IoTCore width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  