import React, { FC } from "react";
  import CodeReview from "../CodeReview";
  
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
        <CodeReview width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  