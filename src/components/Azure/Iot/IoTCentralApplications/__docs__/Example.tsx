import React, { FC } from "react";
  import IoTCentralApplications from "../IoTCentralApplications";
  
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
        <IoTCentralApplications width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  