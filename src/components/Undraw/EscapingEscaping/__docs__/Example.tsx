import React, { FC } from "react";
  import EscapingEscaping from "../EscapingEscaping";
  
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
        <EscapingEscaping width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  