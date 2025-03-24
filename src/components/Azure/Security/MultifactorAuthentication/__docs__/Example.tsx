import React, { FC } from "react";
  import MultifactorAuthentication from "../MultifactorAuthentication";
  
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
        <MultifactorAuthentication width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  