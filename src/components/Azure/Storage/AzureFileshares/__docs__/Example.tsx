import React, { FC } from "react";
  import AzureFileshares from "../AzureFileshares";
  
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
        <AzureFileshares width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  