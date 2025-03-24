import React, { FC } from "react";
  import Themeisle360 from "../Themeisle360";
  
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
        <Themeisle360 width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  