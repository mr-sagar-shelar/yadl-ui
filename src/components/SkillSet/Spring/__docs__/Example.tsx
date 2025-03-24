import React, { FC } from "react";
  import Spring from "../Spring";
  
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
        <Spring width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  