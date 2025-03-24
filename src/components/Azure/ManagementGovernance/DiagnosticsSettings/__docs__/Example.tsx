import React, { FC } from "react";
  import DiagnosticsSettings from "../DiagnosticsSettings";
  
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
        <DiagnosticsSettings width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  