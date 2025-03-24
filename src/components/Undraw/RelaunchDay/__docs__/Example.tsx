import React, { FC } from "react";
  import RelaunchDay from "../RelaunchDay";
  
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
        <RelaunchDay width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  