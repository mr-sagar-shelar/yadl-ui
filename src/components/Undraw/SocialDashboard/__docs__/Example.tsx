import React, { FC } from "react";
  import SocialDashboard from "../SocialDashboard";
  
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
        <SocialDashboard width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  