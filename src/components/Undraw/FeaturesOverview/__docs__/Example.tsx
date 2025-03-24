import React, { FC } from "react";
  import FeaturesOverview from "../FeaturesOverview";
  
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
        <FeaturesOverview width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  