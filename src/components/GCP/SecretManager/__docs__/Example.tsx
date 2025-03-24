import React, { FC } from "react";
  import SecretManager from "../SecretManager";
  
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
        <SecretManager width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  