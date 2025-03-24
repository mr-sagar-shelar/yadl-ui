import React, { FC } from "react";
  import CityDriver from "../CityDriver";
  
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
        <CityDriver width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  