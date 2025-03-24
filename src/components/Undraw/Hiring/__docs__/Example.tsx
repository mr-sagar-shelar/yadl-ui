import React, { FC } from "react";
  import Hiring from "../Hiring";
  
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
        <Hiring width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  