import React, { FC } from "react";
  import Billing from "../Billing";
  
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
        <Billing width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  