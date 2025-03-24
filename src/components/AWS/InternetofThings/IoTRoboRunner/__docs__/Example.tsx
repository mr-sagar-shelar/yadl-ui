import React, { FC } from "react";
  import IoTRoboRunner from "../IoTRoboRunner";
  
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
        <IoTRoboRunner width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  