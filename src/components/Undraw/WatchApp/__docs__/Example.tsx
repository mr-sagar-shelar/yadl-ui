import React, { FC } from "react";
  import WatchApp from "../WatchApp";
  
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
        <WatchApp width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  