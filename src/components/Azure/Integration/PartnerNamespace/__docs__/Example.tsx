import React, { FC } from "react";
  import PartnerNamespace from "../PartnerNamespace";
  
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
        <PartnerNamespace width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  