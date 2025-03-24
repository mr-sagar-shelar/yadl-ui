import React, { FC } from "react";
  import AppEngine from "../AppEngine";
  
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
        <AppEngine width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  