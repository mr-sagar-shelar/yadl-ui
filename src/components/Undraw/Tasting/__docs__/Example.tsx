import React, { FC } from "react";
  import Tasting from "../Tasting";
  
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
        <Tasting width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  