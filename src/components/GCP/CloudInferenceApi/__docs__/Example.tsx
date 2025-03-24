import React, { FC } from "react";
  import CloudInferenceApi from "../CloudInferenceApi";
  
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
        <CloudInferenceApi width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  