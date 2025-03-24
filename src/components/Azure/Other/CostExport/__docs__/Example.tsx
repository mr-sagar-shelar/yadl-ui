import React, { FC } from "react";
  import CostExport from "../CostExport";
  
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
        <CostExport width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  