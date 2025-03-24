import React, { FC } from "react";
  import InboxCleanup from "../InboxCleanup";
  
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
        <InboxCleanup width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  