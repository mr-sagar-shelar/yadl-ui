import React, { FC } from "react";
  import Netlify from "../Netlify";
  
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
        <Netlify width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  