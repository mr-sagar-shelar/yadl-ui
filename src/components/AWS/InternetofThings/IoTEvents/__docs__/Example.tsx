import React, { FC } from "react";
  import IoTEvents from "../IoTEvents";
  
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
        <IoTEvents width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  