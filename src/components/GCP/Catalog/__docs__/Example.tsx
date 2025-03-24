import React, { FC } from "react";
  import Catalog from "../Catalog";
  
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
        <Catalog width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  