import React, { FC } from "react";
  import PersonalHealthDashboard from "../PersonalHealthDashboard";
  
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
        <PersonalHealthDashboard width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  