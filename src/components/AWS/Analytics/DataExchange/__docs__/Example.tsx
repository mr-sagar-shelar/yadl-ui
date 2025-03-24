import React, { FC } from "react";
  import DataExchange from "../DataExchange";
  
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
        <DataExchange width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  