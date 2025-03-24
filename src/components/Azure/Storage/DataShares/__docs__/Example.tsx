import React, { FC } from "react";
  import DataShares from "../DataShares";
  
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
        <DataShares width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  