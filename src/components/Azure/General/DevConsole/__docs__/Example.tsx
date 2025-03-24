import React, { FC } from "react";
  import DevConsole from "../DevConsole";
  
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
        <DevConsole width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  