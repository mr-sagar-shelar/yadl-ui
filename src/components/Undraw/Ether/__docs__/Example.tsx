import React, { FC } from "react";
  import Ether from "../Ether";
  
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
        <Ether width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  