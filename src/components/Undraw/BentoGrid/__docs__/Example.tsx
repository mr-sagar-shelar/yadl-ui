import React, { FC } from "react";
  import BentoGrid from "../BentoGrid";
  
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
        <BentoGrid width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  