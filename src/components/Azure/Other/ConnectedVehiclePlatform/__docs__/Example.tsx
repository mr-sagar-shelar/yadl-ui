import React, { FC } from "react";
  import ConnectedVehiclePlatform from "../ConnectedVehiclePlatform";
  
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
        <ConnectedVehiclePlatform width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  