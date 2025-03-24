import React, { FC } from "react";
  import GlobeSuccess from "../GlobeSuccess";
  
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
        <GlobeSuccess width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  