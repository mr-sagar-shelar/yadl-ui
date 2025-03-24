import React, { FC } from "react";
  import QuickstartCenter from "../QuickstartCenter";
  
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
        <QuickstartCenter width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  