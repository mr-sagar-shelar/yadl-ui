import React, { FC } from "react";
  import EntraConnectSync from "../EntraConnectSync";
  
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
        <EntraConnectSync width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  