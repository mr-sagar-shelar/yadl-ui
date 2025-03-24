import React, { FC } from "react";
  import Art_thinkingArtThinking from "../Art_thinkingArtThinking";
  
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
        <Art_thinkingArtThinking width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  