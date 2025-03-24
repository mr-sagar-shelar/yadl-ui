import React, { FC } from "react";
  import TakingPhoto from "../TakingPhoto";
  
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
        <TakingPhoto width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  