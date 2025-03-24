import React, { FC } from "react";
  import ElementalMediaConvert from "../ElementalMediaConvert";
  
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
        <ElementalMediaConvert width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  