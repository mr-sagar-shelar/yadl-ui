import React, { FC } from "react";
  import AdvancedCustomization from "../AdvancedCustomization";
  
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
        <AdvancedCustomization width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  