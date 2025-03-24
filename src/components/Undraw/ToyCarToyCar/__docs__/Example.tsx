import React, { FC } from "react";
  import ToyCarToyCar from "../ToyCarToyCar";
  
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
        <ToyCarToyCar width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  