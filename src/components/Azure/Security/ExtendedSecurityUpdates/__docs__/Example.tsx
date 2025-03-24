import React, { FC } from "react";
  import ExtendedSecurityUpdates from "../ExtendedSecurityUpdates";
  
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
        <ExtendedSecurityUpdates width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  