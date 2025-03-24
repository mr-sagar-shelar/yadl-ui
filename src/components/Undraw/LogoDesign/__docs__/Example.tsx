import React, { FC } from "react";
  import LogoDesign from "../LogoDesign";
  
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
        <LogoDesign width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  