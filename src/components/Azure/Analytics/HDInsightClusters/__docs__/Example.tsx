import React, { FC } from "react";
  import HDInsightClusters from "../HDInsightClusters";
  
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
        <HDInsightClusters width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  