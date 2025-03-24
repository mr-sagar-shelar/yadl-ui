import React, { FC } from "react";
  import OffRoad from "../OffRoad";
  
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
        <OffRoad width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  