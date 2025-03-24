import React, { FC } from "react";
  import Survey from "../Survey";
  
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
        <Survey width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  