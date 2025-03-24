import React, { FC } from "react";
  import CloudRoutes from "../CloudRoutes";
  
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
        <CloudRoutes width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  