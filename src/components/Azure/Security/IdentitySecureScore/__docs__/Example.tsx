import React, { FC } from "react";
  import IdentitySecureScore from "../IdentitySecureScore";
  
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
        <IdentitySecureScore width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  