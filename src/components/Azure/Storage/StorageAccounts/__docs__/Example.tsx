import React, { FC } from "react";
  import StorageAccounts from "../StorageAccounts";
  
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
        <StorageAccounts width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  