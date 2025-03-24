import React, { FC } from "react";
  import GlobeWarning from "../GlobeWarning";
  
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
        <GlobeWarning width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  