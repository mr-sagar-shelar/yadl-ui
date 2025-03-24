import React, { FC } from "react";
  import DataprocMetastore from "../DataprocMetastore";
  
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
        <DataprocMetastore width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  