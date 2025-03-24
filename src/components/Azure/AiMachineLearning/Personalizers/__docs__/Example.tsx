import React, { FC } from "react";
  import Personalizers from "../Personalizers";
  
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
        <Personalizers width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  