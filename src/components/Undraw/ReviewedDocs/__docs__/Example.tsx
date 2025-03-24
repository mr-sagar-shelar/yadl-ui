import React, { FC } from "react";
  import ReviewedDocs from "../ReviewedDocs";
  
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
        <ReviewedDocs width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  