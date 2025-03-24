import React, { FC } from "react";
  import SimpleNotificationService from "../SimpleNotificationService";
  
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
        <SimpleNotificationService width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  