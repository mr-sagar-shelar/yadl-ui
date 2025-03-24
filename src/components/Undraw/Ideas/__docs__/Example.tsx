import React, { FC } from "react";
  import Ideas from "../Ideas";
  
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
        <Ideas width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  