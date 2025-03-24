import React, { FC } from "react";
  import Report from "../Report";
  
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
        <Report width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  