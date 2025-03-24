import React, { FC } from "react";
  import Kendra from "../Kendra";
  
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
        <Kendra width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  