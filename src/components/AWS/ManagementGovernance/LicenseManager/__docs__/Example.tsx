import React, { FC } from "react";
  import LicenseManager from "../LicenseManager";
  
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
        <LicenseManager width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  