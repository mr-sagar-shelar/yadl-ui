import React, { FC } from "react";
  import Themeisle200 from "../Themeisle200";
  
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
        <Themeisle200 width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  