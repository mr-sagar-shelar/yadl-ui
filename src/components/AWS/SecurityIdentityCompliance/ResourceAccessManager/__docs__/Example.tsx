import React, { FC } from "react";
  import ResourceAccessManager from "../ResourceAccessManager";
  
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
        <ResourceAccessManager width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  