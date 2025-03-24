import React, { FC } from "react";
  import ManagedDevOpsPools from "../ManagedDevOpsPools";
  
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
        <ManagedDevOpsPools width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  