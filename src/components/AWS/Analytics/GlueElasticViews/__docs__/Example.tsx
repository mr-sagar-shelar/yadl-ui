import React, { FC } from "react";
  import GlueElasticViews from "../GlueElasticViews";
  
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
        <GlueElasticViews width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  