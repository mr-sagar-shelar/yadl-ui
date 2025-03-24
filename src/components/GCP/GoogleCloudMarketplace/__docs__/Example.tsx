import React, { FC } from "react";
  import GoogleCloudMarketplace from "../GoogleCloudMarketplace";
  
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
        <GoogleCloudMarketplace width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  