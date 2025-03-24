import React, { FC } from "react";
  import Researching from "../Researching";
  
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
        <Researching width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  