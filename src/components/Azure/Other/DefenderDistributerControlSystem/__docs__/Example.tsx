import React, { FC } from "react";
  import DefenderDistributerControlSystem from "../DefenderDistributerControlSystem";
  
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
        <DefenderDistributerControlSystem width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  