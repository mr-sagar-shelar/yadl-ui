import React, { FC } from "react";
  import BareMetalInfrastructure from "../BareMetalInfrastructure";
  
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
        <BareMetalInfrastructure width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  