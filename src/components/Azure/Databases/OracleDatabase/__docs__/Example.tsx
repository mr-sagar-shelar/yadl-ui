import React, { FC } from "react";
  import OracleDatabase from "../OracleDatabase";
  
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
        <OracleDatabase width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  