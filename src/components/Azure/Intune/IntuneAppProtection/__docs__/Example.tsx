import React, { FC } from "react";
  import IntuneAppProtection from "../IntuneAppProtection";
  
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
        <IntuneAppProtection width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  