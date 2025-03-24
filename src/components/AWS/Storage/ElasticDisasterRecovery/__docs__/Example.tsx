import React, { FC } from "react";
  import ElasticDisasterRecovery from "../ElasticDisasterRecovery";
  
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
        <ElasticDisasterRecovery width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  