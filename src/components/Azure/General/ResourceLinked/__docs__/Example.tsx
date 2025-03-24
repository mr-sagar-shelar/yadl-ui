import React, { FC } from "react";
  import ResourceLinked from "../ResourceLinked";
  
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
        <ResourceLinked width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  