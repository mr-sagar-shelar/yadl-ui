import React, { FC } from "react";
  import ServerStatus from "../ServerStatus";
  
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
        <ServerStatus width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  