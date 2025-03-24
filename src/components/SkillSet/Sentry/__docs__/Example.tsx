import React, { FC } from "react";
  import Sentry from "../Sentry";
  
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
        <Sentry width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  