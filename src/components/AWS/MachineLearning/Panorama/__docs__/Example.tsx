import React, { FC } from "react";
  import Panorama from "../Panorama";
  
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
        <Panorama width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  