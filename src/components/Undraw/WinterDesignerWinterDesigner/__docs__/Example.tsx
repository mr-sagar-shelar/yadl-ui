import React, { FC } from "react";
  import WinterDesignerWinterDesigner from "../WinterDesignerWinterDesigner";
  
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
        <WinterDesignerWinterDesigner width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  