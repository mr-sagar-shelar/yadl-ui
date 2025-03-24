import React, { FC } from "react";
  import LogAnalyticsQueryPack from "../LogAnalyticsQueryPack";
  
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
        <LogAnalyticsQueryPack width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  