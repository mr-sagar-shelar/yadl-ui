import React, { FC } from "react";
  import EMR from "../EMR";
  
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
        <EMR width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  