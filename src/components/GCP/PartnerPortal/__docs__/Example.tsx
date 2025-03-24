import React, { FC } from "react";
  import PartnerPortal from "../PartnerPortal";
  
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
        <PartnerPortal width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  