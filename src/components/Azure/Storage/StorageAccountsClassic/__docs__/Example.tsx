import React, { FC } from "react";
  import StorageAccountsClassic from "../StorageAccountsClassic";
  
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
        <StorageAccountsClassic width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  