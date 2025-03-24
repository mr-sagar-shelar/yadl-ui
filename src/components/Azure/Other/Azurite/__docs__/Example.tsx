import React, { FC } from "react";
  import Azurite from "../Azurite";
  
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
        <Azurite width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  