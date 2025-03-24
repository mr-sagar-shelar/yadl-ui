import React, { FC } from "react";
  import Pinia from "../Pinia";
  
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
        <Pinia width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  