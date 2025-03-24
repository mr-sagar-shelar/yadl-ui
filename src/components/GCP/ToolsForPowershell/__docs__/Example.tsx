import React, { FC } from "react";
  import ToolsForPowershell from "../ToolsForPowershell";
  
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
        <ToolsForPowershell width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  