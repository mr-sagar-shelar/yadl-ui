import React, { FC } from "react";
  import CostExplorer from "../CostExplorer";
  
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
        <CostExplorer width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  