import React, { FC } from "react";
  import ThinkboxStoke from "../ThinkboxStoke";
  
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
        <ThinkboxStoke width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  