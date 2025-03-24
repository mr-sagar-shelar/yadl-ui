import React, { FC } from "react";
  import CostBudgets from "../CostBudgets";
  
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
        <CostBudgets width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  