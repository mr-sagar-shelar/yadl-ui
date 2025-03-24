import React, { FC } from "react";
  import DesignSprint from "../DesignSprint";
  
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
        <DesignSprint width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  