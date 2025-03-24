import React, { FC } from "react";
  import Fediverse from "../Fediverse";
  
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
        <Fediverse width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  