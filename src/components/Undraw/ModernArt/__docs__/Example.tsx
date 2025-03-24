import React, { FC } from "react";
  import ModernArt from "../ModernArt";
  
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
        <ModernArt width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  