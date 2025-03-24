import React, { FC } from "react";
  import PendingApproval from "../PendingApproval";
  
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
        <PendingApproval width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  