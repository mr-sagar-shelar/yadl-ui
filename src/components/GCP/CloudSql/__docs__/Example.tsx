import React, { FC } from "react";
  import CloudSql from "../CloudSql";
  
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
        <CloudSql width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  