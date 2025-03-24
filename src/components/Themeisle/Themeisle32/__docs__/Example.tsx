import React, { FC } from "react";
  import Themeisle32 from "../Themeisle32";
  
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
        <Themeisle32 width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  