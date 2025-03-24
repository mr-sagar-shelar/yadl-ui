import React, { FC } from "react";
  import Investing from "../Investing";
  
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
        <Investing width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  