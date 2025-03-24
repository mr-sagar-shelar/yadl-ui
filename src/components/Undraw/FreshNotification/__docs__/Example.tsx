import React, { FC } from "react";
  import FreshNotification from "../FreshNotification";
  
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
        <FreshNotification width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  