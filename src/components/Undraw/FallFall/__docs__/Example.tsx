import React, { FC } from "react";
  import FallFall from "../FallFall";
  
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
        <FallFall width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  