import React, { FC } from "react";
  import MediaTranslationApi from "../MediaTranslationApi";
  
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
        <MediaTranslationApi width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  