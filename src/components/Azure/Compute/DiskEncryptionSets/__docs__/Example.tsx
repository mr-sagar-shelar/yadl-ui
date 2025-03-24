import React, { FC } from "react";
  import DiskEncryptionSets from "../DiskEncryptionSets";
  
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
        <DiskEncryptionSets width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  