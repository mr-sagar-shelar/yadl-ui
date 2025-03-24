import React, { FC } from "react";
  import LandingPage from "../LandingPage";
  
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
        <LandingPage width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  