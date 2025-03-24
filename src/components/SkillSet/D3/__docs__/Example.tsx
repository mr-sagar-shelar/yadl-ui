import React, { FC } from "react";
  import D3 from "../D3";
  
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
        <D3 width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  