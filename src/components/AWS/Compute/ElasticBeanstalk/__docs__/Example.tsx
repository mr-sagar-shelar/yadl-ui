import React, { FC } from "react";
  import ElasticBeanstalk from "../ElasticBeanstalk";
  
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
        <ElasticBeanstalk width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  