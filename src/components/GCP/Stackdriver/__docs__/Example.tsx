import React, { FC } from "react";
  import Stackdriver from "../Stackdriver";
  
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
        <Stackdriver width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  