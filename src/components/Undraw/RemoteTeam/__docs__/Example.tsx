import React, { FC } from "react";
  import RemoteTeam from "../RemoteTeam";
  
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
        <RemoteTeam width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  