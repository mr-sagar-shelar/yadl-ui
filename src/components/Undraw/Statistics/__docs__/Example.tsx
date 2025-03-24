import React, { FC } from "react";
  import Statistics from "../Statistics";
  
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
        <Statistics width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  