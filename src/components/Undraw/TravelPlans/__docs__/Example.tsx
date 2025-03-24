import React, { FC } from "react";
  import TravelPlans from "../TravelPlans";
  
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
        <TravelPlans width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  