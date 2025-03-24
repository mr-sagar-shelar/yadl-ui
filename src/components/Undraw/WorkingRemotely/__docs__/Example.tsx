import React, { FC } from "react";
  import WorkingRemotely from "../WorkingRemotely";
  
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
        <WorkingRemotely width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  