import React, { FC } from "react";
  import DashboardHub from "../DashboardHub";
  
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
        <DashboardHub width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  