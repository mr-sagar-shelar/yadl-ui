import React, { FC } from "react";
  import Debian from "../Debian";
  
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
        <Debian width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  