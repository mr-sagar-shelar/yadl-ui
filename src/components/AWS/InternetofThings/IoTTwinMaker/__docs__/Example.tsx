import React, { FC } from "react";
  import IoTTwinMaker from "../IoTTwinMaker";
  
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
        <IoTTwinMaker width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  