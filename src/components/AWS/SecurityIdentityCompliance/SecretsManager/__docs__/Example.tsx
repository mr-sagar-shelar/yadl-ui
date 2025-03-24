import React, { FC } from "react";
  import SecretsManager from "../SecretsManager";
  
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
        <SecretsManager width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  