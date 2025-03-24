import React, { FC } from "react";
  import TransferAppliance from "../TransferAppliance";
  
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
        <TransferAppliance width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  