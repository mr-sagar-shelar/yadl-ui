import React, { FC } from "react";
  import DataLossPreventionApi from "../DataLossPreventionApi";
  
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
        <DataLossPreventionApi width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  