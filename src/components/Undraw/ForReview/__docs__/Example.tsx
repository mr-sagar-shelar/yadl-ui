import React, { FC } from "react";
  import ForReview from "../ForReview";
  
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
        <ForReview width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  