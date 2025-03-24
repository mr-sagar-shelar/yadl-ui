import React, { FC } from "react";
  import OnlineDating from "../OnlineDating";
  
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
        <OnlineDating width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  