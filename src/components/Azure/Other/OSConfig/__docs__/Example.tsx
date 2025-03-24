import React, { FC } from "react";
  import OSConfig from "../OSConfig";
  
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
        <OSConfig width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  