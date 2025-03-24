import React, { FC } from "react";
  import Themeisle75 from "../Themeisle75";
  
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
        <Themeisle75 width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  