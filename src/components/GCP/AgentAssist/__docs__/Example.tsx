import React, { FC } from "react";
  import AgentAssist from "../AgentAssist";
  
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
        <AgentAssist width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  