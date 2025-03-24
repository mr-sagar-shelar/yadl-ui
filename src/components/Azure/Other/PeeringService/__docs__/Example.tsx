import React, { FC } from "react";
  import PeeringService from "../PeeringService";
  
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
        <PeeringService width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  