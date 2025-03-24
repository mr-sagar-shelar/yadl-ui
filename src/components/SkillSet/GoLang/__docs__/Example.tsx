import React, { FC } from "react";
  import GoLang from "../GoLang";
  
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
        <GoLang width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  