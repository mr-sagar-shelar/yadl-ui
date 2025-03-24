import React, { FC } from "react";
  import NewNotifications from "../NewNotifications";
  
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
        <NewNotifications width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  