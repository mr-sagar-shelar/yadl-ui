import React, { FC } from "react";
  import Markdown from "../Markdown";
  
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
        <Markdown width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  