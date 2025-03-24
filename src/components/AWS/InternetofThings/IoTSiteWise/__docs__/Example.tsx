import React, { FC } from "react";
  import IoTSiteWise from "../IoTSiteWise";
  
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
        <IoTSiteWise width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  