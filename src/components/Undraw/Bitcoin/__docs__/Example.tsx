import React, { FC } from "react";
  import Bitcoin from "../Bitcoin";
  
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
        <Bitcoin width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  