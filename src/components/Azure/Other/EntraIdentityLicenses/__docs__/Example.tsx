import React, { FC } from "react";
  import EntraIdentityLicenses from "../EntraIdentityLicenses";
  
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
        <EntraIdentityLicenses width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  