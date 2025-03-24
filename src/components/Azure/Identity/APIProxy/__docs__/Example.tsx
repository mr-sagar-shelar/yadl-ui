import React, { FC } from "react";
  import APIProxy from "../APIProxy";
  
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
        <APIProxy width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  