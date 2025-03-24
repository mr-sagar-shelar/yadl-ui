import React, { FC } from "react";
  import KeyAccessJustifications from "../KeyAccessJustifications";
  
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
        <KeyAccessJustifications width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  