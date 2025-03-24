import React, { FC } from "react";
  import Mastodon from "../Mastodon";
  
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
        <Mastodon width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  