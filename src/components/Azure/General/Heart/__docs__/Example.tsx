import React, { FC } from "react";
  import Heart from "../Heart";
  
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
        <Heart width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  