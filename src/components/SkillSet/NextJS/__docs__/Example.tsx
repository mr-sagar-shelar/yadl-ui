import React, { FC } from "react";
  import NextJS from "../NextJS";
  
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
        <NextJS width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  