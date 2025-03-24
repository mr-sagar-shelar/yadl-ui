import React, { FC } from "react";
  import BlockchainApplications from "../BlockchainApplications";
  
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
        <BlockchainApplications width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  