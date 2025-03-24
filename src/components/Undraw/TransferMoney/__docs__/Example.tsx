import React, { FC } from "react";
  import TransferMoney from "../TransferMoney";
  
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
        <TransferMoney width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  