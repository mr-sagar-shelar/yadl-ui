import React, { FC } from "react";
  import DiscordJS from "../DiscordJS";
  
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
        <DiscordJS width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  