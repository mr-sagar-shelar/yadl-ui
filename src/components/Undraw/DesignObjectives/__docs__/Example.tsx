import React, { FC } from "react";
  import DesignObjectives from "../DesignObjectives";
  
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
        <DesignObjectives width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  