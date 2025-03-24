import React, { FC } from "react";
  import Budgets from "../Budgets";
  
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
        <Budgets width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  