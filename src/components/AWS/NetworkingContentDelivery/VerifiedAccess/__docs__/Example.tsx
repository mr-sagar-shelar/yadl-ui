import React, { FC } from "react";
  import VerifiedAccess from "../VerifiedAccess";
  
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
        <VerifiedAccess width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  