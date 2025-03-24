import React, { FC } from "react";
  import RollupJS from "../RollupJS";
  
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
        <RollupJS width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  