import React, { FC } from "react";
  import ImageDefinitions from "../ImageDefinitions";
  
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
        <ImageDefinitions width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  