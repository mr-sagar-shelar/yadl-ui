import React, { FC } from "react";
  import AdvancedAgentModeling from "../AdvancedAgentModeling";
  
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
        <AdvancedAgentModeling width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  