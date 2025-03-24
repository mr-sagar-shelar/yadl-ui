import React, { FC } from "react";
  import QuantumLedgerDatabase from "../QuantumLedgerDatabase";
  
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
        <QuantumLedgerDatabase width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  