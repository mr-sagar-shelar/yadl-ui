import React, { FC } from "react";
  import IdentityawareProxy from "../IdentityawareProxy";
  
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
        <IdentityawareProxy width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  