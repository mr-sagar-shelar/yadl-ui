import React, { FC } from "react";
  import FallIsComingFallIsComing from "../FallIsComingFallIsComing";
  
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
        <FallIsComingFallIsComing width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  