import React, { FC } from "react";
  import DroneDelivery from "../DroneDelivery";
  
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
        <DroneDelivery width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  