import React, { FC } from "react";
  import TrustedAdvisor from "../TrustedAdvisor";
  
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
        <TrustedAdvisor width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  