import React, { FC } from "react";
  import Ruby from "../Ruby";
  
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
        <Ruby width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  