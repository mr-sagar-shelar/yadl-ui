import React, { FC } from "react";
  import PushNotifications from "../PushNotifications";
  
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
        <PushNotifications width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  