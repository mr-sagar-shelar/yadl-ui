import React, { FC } from "react";
  import DefenderMarquee from "../DefenderMarquee";
  
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
        <DefenderMarquee width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  