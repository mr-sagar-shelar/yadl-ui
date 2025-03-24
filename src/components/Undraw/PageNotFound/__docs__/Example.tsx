import React, { FC } from "react";
  import PageNotFound from "../PageNotFound";
  
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
        <PageNotFound width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  