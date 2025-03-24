import React, { FC } from "react";
  import ImageFocus from "../ImageFocus";
  
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
        <ImageFocus width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  