import React, { FC } from "react";
  import TeamCollaboration from "../TeamCollaboration";
  
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
        <TeamCollaboration width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  