import React, { FC } from "react";
  import MarilynMarilyn from "../MarilynMarilyn";
  
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
        <MarilynMarilyn width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  