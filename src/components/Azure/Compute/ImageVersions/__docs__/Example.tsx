import React, { FC } from "react";
  import ImageVersions from "../ImageVersions";
  
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
        <ImageVersions width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  