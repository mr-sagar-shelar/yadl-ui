import React, { FC } from "react";
  import ActivityLog from "../ActivityLog";
  
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
        <ActivityLog width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  