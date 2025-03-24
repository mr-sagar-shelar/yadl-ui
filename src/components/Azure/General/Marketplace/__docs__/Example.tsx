import React, { FC } from "react";
  import Marketplace from "../Marketplace";
  
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
        <Marketplace width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  