import React, { FC } from "react";
  import PrivateEndpoints from "../PrivateEndpoints";
  
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
        <PrivateEndpoints width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  