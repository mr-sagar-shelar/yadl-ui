import React, { FC } from "react";
  import ImageTemplates from "../ImageTemplates";
  
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
        <ImageTemplates width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  