import React, { FC } from "react";
  import EarlyAccessCenter from "../EarlyAccessCenter";
  
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
        <EarlyAccessCenter width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  