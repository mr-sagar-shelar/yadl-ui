import React, { FC } from "react";
  import Gatsby from "../Gatsby";
  
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
        <Gatsby width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  