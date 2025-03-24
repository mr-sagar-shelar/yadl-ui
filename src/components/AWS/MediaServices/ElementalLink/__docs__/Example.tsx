import React, { FC } from "react";
  import ElementalLink from "../ElementalLink";
  
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
        <ElementalLink width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  