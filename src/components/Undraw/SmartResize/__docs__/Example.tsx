import React, { FC } from "react";
  import SmartResize from "../SmartResize";
  
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
        <SmartResize width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  