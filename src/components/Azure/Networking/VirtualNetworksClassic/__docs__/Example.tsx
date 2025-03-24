import React, { FC } from "react";
  import VirtualNetworksClassic from "../VirtualNetworksClassic";
  
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
        <VirtualNetworksClassic width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  