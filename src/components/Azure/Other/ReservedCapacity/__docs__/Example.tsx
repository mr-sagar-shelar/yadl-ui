import React, { FC } from "react";
  import ReservedCapacity from "../ReservedCapacity";
  
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
        <ReservedCapacity width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  