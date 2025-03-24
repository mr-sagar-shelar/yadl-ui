import React, { FC } from "react";
  import Suburbs from "../Suburbs";
  
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
        <Suburbs width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  