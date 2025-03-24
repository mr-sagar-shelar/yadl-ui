import React, { FC } from "react";
  import Blueprints from "../Blueprints";
  
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
        <Blueprints width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  