import React, { FC } from "react";
  import DevOpsGuru from "../DevOpsGuru";
  
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
        <DevOpsGuru width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  