import React, { FC } from "react";
  import WorkDocsSDK from "../WorkDocsSDK";
  
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
        <WorkDocsSDK width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  