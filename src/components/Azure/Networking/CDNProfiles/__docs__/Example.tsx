import React, { FC } from "react";
  import CDNProfiles from "../CDNProfiles";
  
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
        <CDNProfiles width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  