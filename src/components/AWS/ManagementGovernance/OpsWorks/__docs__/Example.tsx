import React, { FC } from "react";
  import OpsWorks from "../OpsWorks";
  
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
        <OpsWorks width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  