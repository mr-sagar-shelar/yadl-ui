import React, { FC } from "react";
  import OnPremisesDataGateways from "../OnPremisesDataGateways";
  
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
        <OnPremisesDataGateways width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  