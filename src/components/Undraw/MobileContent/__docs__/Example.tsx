import React, { FC } from "react";
  import MobileContent from "../MobileContent";
  
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
        <MobileContent width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  