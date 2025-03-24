import React, { FC } from "react";
  import Popular from "../Popular";
  
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
        <Popular width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  