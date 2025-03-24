import React, { FC } from "react";
  import MultiTenancy from "../MultiTenancy";
  
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
        <MultiTenancy width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  