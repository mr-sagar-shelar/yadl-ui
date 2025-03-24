import React, { FC } from "react";
  import CloudEkm from "../CloudEkm";
  
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
        <CloudEkm width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  