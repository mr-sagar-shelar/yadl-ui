import React, { FC } from "react";
  import Themeisle411 from "../Themeisle411";
  
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
        <Themeisle411 width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  