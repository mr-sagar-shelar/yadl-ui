import React, { FC } from "react";
  import GoingOffline from "../GoingOffline";
  
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
        <GoingOffline width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  