import React, { FC } from "react";
  import TeamUp from "../TeamUp";
  
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
        <TeamUp width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  