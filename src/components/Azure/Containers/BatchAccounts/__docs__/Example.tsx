import React, { FC } from "react";
  import BatchAccounts from "../BatchAccounts";
  
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
        <BatchAccounts width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  