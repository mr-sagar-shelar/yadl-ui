import React, { FC } from "react";
  import CertificateAuthorityService from "../CertificateAuthorityService";
  
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
        <CertificateAuthorityService width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  