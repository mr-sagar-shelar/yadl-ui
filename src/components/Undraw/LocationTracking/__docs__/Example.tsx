import React, { FC } from "react";
  import LocationTracking from "../LocationTracking";
  
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
        <LocationTracking width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  