import React, { FC } from "react";
  import WAF from "../WAF";
  
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
        <WAF width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  