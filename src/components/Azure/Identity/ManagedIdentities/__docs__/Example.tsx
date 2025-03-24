import React, { FC } from "react";
  import ManagedIdentities from "../ManagedIdentities";
  
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
        <ManagedIdentities width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  