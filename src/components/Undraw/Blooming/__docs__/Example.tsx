import React, { FC } from "react";
  import Blooming from "../Blooming";
  
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
        <Blooming width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  