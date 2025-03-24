import React, { FC } from "react";
  import Beyondcorp from "../Beyondcorp";
  
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
        <Beyondcorp width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  