import React, { FC } from "react";
  import AppServicePlans from "../AppServicePlans";
  
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
        <AppServicePlans width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  