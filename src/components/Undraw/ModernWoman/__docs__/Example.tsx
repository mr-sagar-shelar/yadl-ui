import React, { FC } from "react";
  import ModernWoman from "../ModernWoman";
  
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
        <ModernWoman width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  