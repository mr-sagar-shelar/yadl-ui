import React, { FC } from "react";
  import WatchApplication from "../WatchApplication";
  
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
        <WatchApplication width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  