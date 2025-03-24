import React, { FC } from "react";
  import AutomlNaturalLanguage from "../AutomlNaturalLanguage";
  
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
        <AutomlNaturalLanguage width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  