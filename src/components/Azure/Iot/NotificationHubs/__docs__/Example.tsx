import React, { FC } from "react";
  import NotificationHubs from "../NotificationHubs";
  
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
        <NotificationHubs width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  