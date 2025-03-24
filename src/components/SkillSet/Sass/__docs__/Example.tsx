import React, { FC } from "react";
  import Sass from "../Sass";
  
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
        <Sass width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  