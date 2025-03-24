import React, { FC } from "react";
  import GCP from "../GCP";
  
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
        <GCP width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  