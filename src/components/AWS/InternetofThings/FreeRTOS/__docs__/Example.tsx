import React, { FC } from "react";
  import FreeRTOS from "../FreeRTOS";
  
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
        <FreeRTOS width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  