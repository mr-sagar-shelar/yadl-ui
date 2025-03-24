import React, { FC } from "react";
  import EntraIdentityCustomRoles from "../EntraIdentityCustomRoles";
  
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
        <EntraIdentityCustomRoles width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  