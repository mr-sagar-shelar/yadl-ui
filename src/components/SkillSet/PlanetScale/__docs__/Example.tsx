import React, { FC } from "react";
  import PlanetScale from "../PlanetScale";
  
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
        <PlanetScale width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  