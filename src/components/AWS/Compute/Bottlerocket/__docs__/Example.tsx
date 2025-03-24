import React, { FC } from "react";
  import Bottlerocket from "../Bottlerocket";
  
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
        <Bottlerocket width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  