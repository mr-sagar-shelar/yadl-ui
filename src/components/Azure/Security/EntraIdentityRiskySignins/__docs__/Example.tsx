import React, { FC } from "react";
  import EntraIdentityRiskySignins from "../EntraIdentityRiskySignins";
  
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
        <EntraIdentityRiskySignins width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  