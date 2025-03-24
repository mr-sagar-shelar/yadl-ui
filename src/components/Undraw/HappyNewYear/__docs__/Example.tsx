import React, { FC } from "react";
  import HappyNewYear from "../HappyNewYear";
  
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
        <HappyNewYear width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  