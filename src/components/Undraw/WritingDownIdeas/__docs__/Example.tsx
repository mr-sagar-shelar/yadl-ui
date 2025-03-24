import React, { FC } from "react";
  import WritingDownIdeas from "../WritingDownIdeas";
  
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
        <WritingDownIdeas width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  