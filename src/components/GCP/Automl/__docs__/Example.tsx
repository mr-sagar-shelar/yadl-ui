import React, { FC } from "react";
  import Automl from "../Automl";
  
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
        <Automl width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  