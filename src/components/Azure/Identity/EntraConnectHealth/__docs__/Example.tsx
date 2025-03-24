import React, { FC } from "react";
  import EntraConnectHealth from "../EntraConnectHealth";
  
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
        <EntraConnectHealth width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  