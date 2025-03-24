import React, { FC } from "react";
  import WordpressWordpress from "../WordpressWordpress";
  
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
        <WordpressWordpress width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  