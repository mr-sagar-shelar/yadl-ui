import React, { FC } from "react";
  import StorageQueue from "../StorageQueue";
  
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
        <StorageQueue width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  