import React, { FC } from "react";
  import Flagged from "../Flagged";
  
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
        <Flagged width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  