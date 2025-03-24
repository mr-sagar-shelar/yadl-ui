import React, { FC } from "react";
  import DesignProcess from "../DesignProcess";
  
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
        <DesignProcess width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  