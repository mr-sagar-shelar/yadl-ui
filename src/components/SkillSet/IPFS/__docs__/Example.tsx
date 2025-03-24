import React, { FC } from "react";
  import IPFS from "../IPFS";
  
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
        <IPFS width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  