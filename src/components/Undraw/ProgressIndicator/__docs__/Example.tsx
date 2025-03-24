import React, { FC } from "react";
  import ProgressIndicator from "../ProgressIndicator";
  
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
        <ProgressIndicator width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  