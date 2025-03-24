import React, { FC } from "react";
  import Athena from "../Athena";
  
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
        <Athena width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  