import React, { FC } from "react";
  import R from "../R";
  
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
        <R width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  