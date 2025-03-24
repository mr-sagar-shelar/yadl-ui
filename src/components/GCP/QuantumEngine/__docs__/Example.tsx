import React, { FC } from "react";
  import QuantumEngine from "../QuantumEngine";
  
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
        <QuantumEngine width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  