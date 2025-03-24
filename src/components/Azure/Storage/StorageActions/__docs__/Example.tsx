import React, { FC } from "react";
  import StorageActions from "../StorageActions";
  
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
        <StorageActions width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  