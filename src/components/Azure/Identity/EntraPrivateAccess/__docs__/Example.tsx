import React, { FC } from "react";
  import EntraPrivateAccess from "../EntraPrivateAccess";
  
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
        <EntraPrivateAccess width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  