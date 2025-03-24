import React, { FC } from "react";
  import Permissions from "../Permissions";
  
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
        <Permissions width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  