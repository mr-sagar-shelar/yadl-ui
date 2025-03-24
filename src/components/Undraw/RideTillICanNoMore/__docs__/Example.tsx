import React, { FC } from "react";
  import RideTillICanNoMore from "../RideTillICanNoMore";
  
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
        <RideTillICanNoMore width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  