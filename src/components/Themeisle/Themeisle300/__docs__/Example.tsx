import React, { FC } from "react";
  import Themeisle300 from "../Themeisle300";
  
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
        <Themeisle300 width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  