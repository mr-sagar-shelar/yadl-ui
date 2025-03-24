import React, { FC } from "react";
  import Comprehend from "../Comprehend";
  
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
        <Comprehend width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  