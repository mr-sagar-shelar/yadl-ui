import React, { FC } from "react";
  import RedHatOpenShiftServiceonAWS from "../RedHatOpenShiftServiceonAWS";
  
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
        <RedHatOpenShiftServiceonAWS width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  