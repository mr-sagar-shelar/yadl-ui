import React, { FC } from "react";
  import TeamSpirit from "../TeamSpirit";
  
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
        <TeamSpirit width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  