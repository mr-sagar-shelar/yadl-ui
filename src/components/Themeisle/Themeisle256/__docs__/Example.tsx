import React, { FC } from "react";
  import Themeisle256 from "../Themeisle256";
  
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
        <Themeisle256 width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  