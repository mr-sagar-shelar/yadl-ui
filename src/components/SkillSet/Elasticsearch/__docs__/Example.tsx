import React, { FC } from "react";
  import Elasticsearch from "../Elasticsearch";
  
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
        <Elasticsearch width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  