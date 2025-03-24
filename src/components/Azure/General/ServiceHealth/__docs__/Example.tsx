import React, { FC } from "react";
  import ServiceHealth from "../ServiceHealth";
  
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
        <ServiceHealth width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  