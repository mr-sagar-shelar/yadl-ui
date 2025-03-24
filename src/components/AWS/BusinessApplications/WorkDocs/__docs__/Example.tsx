import React, { FC } from "react";
  import WorkDocs from "../WorkDocs";
  
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
        <WorkDocs width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  