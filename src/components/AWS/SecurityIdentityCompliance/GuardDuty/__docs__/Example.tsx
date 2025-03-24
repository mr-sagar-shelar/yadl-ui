import React, { FC } from "react";
  import GuardDuty from "../GuardDuty";
  
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
        <GuardDuty width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  