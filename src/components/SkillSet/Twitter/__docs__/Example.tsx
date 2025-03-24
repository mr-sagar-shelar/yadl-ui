import React, { FC } from "react";
  import Twitter from "../Twitter";
  
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
        <Twitter width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  