import React, { FC } from "react";
  import CloudTranslationApi from "../CloudTranslationApi";
  
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
        <CloudTranslationApi width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  