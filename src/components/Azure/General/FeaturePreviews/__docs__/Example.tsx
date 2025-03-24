import React, { FC } from "react";
  import FeaturePreviews from "../FeaturePreviews";
  
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
        <FeaturePreviews width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  