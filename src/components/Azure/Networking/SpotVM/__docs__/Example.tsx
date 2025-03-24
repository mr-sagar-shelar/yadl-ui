import React, { FC } from "react";
  import SpotVM from "../SpotVM";
  
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
        <SpotVM width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  