import React, { FC } from "react";
  import IAMIdentityCenter from "../IAMIdentityCenter";
  
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
        <IAMIdentityCenter width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  