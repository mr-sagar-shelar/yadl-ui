import React, { FC } from "react";
  import Cognito from "../Cognito";
  
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
        <Cognito width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  