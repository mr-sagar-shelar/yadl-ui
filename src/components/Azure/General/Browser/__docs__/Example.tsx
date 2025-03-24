import React, { FC } from "react";
  import Browser from "../Browser";
  
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
        <Browser width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  