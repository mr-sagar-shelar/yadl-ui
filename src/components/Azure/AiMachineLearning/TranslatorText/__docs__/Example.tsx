import React, { FC } from "react";
  import TranslatorText from "../TranslatorText";
  
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
        <TranslatorText width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  