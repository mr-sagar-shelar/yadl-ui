import React, { FC } from "react";
  import C from "../C";
  
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
        <C width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  