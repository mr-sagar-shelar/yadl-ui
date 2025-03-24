import React, { FC } from "react";
  import Omics from "../Omics";
  
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
        <Omics width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  