import React, { FC } from "react";
  import LabAccounts from "../LabAccounts";
  
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
        <LabAccounts width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  