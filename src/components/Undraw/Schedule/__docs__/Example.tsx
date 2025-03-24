import React, { FC } from "react";
  import Schedule from "../Schedule";
  
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
        <Schedule width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  