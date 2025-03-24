import React, { FC } from "react";
  import RecommendationsAi from "../RecommendationsAi";
  
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
        <RecommendationsAi width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  