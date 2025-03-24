import React, { FC } from "react";
  import CloudGeneric from "../CloudGeneric";
  
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
        <CloudGeneric width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  