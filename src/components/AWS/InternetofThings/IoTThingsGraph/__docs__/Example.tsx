import React, { FC } from "react";
  import IoTThingsGraph from "../IoTThingsGraph";
  
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
        <IoTThingsGraph width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  