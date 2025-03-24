import React, { FC } from "react";
  import IoTFleetWise from "../IoTFleetWise";
  
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
        <IoTFleetWise width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  