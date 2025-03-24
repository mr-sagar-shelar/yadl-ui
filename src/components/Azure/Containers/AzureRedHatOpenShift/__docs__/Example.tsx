import React, { FC } from "react";
  import AzureRedHatOpenShift from "../AzureRedHatOpenShift";
  
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
        <AzureRedHatOpenShift width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  