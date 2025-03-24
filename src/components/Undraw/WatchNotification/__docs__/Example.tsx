import React, { FC } from "react";
  import WatchNotification from "../WatchNotification";
  
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
        <WatchNotification width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  