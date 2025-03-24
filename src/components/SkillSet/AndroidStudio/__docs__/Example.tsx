import React, { FC } from "react";
  import AndroidStudio from "../AndroidStudio";
  
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
        <AndroidStudio width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  