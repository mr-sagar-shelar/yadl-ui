import React, { FC } from "react";
  import NotFound from "../NotFound";
  
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
        <NotFound width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  