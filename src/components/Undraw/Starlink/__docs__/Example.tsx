import React, { FC } from "react";
  import Starlink from "../Starlink";
  
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
        <Starlink width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  