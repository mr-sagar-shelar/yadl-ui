import React, { FC } from "react";
  import ClickHere from "../ClickHere";
  
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
        <ClickHere width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  