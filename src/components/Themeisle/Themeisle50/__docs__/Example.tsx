import React, { FC } from "react";
  import Themeisle50 from "../Themeisle50";
  
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
        <Themeisle50 width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  