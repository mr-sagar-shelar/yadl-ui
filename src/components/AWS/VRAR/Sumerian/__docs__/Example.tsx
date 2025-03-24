import React, { FC } from "react";
  import Sumerian from "../Sumerian";
  
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
        <Sumerian width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  