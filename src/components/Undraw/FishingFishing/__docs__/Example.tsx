import React, { FC } from "react";
  import FishingFishing from "../FishingFishing";
  
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
        <FishingFishing width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  