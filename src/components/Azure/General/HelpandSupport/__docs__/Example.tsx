import React, { FC } from "react";
  import HelpandSupport from "../HelpandSupport";
  
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
        <HelpandSupport width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  