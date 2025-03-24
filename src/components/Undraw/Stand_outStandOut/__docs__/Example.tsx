import React, { FC } from "react";
  import Stand_outStandOut from "../Stand_outStandOut";
  
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
        <Stand_outStandOut width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  