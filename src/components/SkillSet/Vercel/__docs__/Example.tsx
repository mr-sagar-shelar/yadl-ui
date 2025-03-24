import React, { FC } from "react";
  import Vercel from "../Vercel";
  
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
        <Vercel width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  