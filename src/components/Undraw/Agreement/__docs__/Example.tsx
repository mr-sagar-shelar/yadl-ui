import React, { FC } from "react";
  import Agreement from "../Agreement";
  
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
        <Agreement width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  