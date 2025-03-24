import React, { FC } from "react";
  import RemoteDesignTeam from "../RemoteDesignTeam";
  
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
        <RemoteDesignTeam width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  