import React, { FC } from "react";
  import MasterPlan from "../MasterPlan";
  
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
        <MasterPlan width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  