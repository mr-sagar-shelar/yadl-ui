import React, { FC } from "react";
  import AmusementPark from "../AmusementPark";
  
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
        <AmusementPark width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  