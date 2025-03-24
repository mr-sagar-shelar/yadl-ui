import React, { FC } from "react";
  import ScrumBoard from "../ScrumBoard";
  
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
        <ScrumBoard width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  