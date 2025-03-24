import React, { FC } from "react";
  import OsPatchManagement from "../OsPatchManagement";
  
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
        <OsPatchManagement width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  