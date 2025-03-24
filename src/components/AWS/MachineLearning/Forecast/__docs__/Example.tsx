import React, { FC } from "react";
  import Forecast from "../Forecast";
  
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
        <Forecast width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  