import React, { FC } from "react";
  import StorageExplorer from "../StorageExplorer";
  
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
        <StorageExplorer width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  