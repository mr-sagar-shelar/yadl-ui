import React, { FC } from "react";
  import Adventure from "../Adventure";
  
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
        <Adventure width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  