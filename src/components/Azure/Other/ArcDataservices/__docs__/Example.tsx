import React, { FC } from "react";
  import ArcDataservices from "../ArcDataservices";
  
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
        <ArcDataservices width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  