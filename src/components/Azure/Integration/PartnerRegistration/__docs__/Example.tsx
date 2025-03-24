import React, { FC } from "react";
  import PartnerRegistration from "../PartnerRegistration";
  
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
        <PartnerRegistration width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  