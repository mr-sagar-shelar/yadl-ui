import React, { FC } from "react";
  import EntraIdentityRolesandAdministrators from "../EntraIdentityRolesandAdministrators";
  
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
        <EntraIdentityRolesandAdministrators width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  