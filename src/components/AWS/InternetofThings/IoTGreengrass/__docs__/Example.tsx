import React, { FC } from "react";
  import IoTGreengrass from "../IoTGreengrass";
  
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
        <IoTGreengrass width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  