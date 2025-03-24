import React, { FC } from "react";
  import ElementalMediaStore from "../ElementalMediaStore";
  
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
        <ElementalMediaStore width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  