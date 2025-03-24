import React, { FC } from "react";
  import Themeisle128 from "../Themeisle128";
  
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
        <Themeisle128 width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  