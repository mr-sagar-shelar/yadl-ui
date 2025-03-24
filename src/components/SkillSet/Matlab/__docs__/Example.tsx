import React, { FC } from "react";
  import Matlab from "../Matlab";
  
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
        <Matlab width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  