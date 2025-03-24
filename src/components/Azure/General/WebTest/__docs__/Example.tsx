import React, { FC } from "react";
  import WebTest from "../WebTest";
  
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
        <WebTest width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  