import React, { FC } from "react";
  import Certification from "../Certification";
  
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
        <Certification width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  