import React, { FC } from "react";
  import Mobile_imagesMobileImages from "../Mobile_imagesMobileImages";
  
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
        <Mobile_imagesMobileImages width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  