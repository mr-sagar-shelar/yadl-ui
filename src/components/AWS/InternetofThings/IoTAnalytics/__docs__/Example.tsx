import React, { FC } from "react";
  import IoTAnalytics from "../IoTAnalytics";
  
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
        <IoTAnalytics width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  