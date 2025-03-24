import React, { FC } from "react";
  import MultiFactorAuthentication from "../MultiFactorAuthentication";
  
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
        <MultiFactorAuthentication width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  