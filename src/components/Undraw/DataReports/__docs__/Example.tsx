import React, { FC } from "react";
  import DataReports from "../DataReports";
  
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
        <DataReports width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  