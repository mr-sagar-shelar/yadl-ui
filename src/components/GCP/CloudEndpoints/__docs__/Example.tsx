import React, { FC } from "react";
  import CloudEndpoints from "../CloudEndpoints";
  
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
        <CloudEndpoints width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  