import React, { FC } from "react";
  import GameServers from "../GameServers";
  
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
        <GameServers width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  