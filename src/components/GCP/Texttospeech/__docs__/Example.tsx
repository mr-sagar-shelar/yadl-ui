import React, { FC } from "react";
  import Texttospeech from "../Texttospeech";
  
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
        <Texttospeech width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  