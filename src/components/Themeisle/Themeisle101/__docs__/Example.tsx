import React, { FC } from "react";
  import Themeisle101 from "../Themeisle101";
  
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
        <Themeisle101 width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  