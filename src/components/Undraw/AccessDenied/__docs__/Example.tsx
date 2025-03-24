import React, { FC } from "react";
  import AccessDenied from "../AccessDenied";
  
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
        <AccessDenied width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  