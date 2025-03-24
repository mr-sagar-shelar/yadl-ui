import React, { FC } from "react";
  import Quotas from "../Quotas";
  
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
        <Quotas width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  