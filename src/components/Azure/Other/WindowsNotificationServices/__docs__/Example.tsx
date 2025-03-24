import React, { FC } from "react";
  import WindowsNotificationServices from "../WindowsNotificationServices";
  
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
        <WindowsNotificationServices width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  