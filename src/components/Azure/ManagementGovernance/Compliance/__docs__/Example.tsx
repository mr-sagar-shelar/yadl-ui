import React, { FC } from "react";
  import Compliance from "../Compliance";
  
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
        <Compliance width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  