import React, { FC } from "react";
  import ConditionalAccess from "../ConditionalAccess";
  
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
        <ConditionalAccess width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  