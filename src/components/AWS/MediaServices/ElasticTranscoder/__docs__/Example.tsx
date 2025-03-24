import React, { FC } from "react";
  import ElasticTranscoder from "../ElasticTranscoder";
  
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
        <ElasticTranscoder width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  