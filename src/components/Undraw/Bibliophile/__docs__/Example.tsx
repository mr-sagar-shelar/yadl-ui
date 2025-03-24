import React, { FC } from "react";
  import Bibliophile from "../Bibliophile";
  
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
        <Bibliophile width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  