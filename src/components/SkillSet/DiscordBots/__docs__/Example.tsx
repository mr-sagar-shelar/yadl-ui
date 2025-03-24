import React, { FC } from "react";
  import DiscordBots from "../DiscordBots";
  
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
        <DiscordBots width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  