import React, { FC } from "react";
  import AutomationAccounts from "../AutomationAccounts";
  
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
        <AutomationAccounts width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  