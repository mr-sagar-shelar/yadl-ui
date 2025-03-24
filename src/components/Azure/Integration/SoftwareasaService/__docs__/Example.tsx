import React, { FC } from "react";
  import SoftwareasaService from "../SoftwareasaService";
  
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
        <SoftwareasaService width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  