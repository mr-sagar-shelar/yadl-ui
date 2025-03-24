import React, { FC } from "react";
  import CloudComposer from "../CloudComposer";
  
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
        <CloudComposer width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  