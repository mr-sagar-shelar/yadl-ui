import React, { FC } from "react";
  import Themeisle500 from "../Themeisle500";
  
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
        <Themeisle500 width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  