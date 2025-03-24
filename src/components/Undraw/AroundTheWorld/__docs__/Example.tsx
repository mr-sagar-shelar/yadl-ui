import React, { FC } from "react";
  import AroundTheWorld from "../AroundTheWorld";
  
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
        <AroundTheWorld width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  