import React, { FC } from "react";
  import Team from "../Team";
  
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
        <Team width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  