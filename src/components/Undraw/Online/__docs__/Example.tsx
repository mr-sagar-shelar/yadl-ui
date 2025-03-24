import React, { FC } from "react";
  import Online from "../Online";
  
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
        <Online width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  