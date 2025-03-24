import React, { FC } from "react";
  import BusinessProcessTracking from "../BusinessProcessTracking";
  
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
        <BusinessProcessTracking width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  