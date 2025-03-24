import React, { FC } from "react";
  import CostandUsageReport from "../CostandUsageReport";
  
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
        <CostandUsageReport width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  