import React, { FC } from "react";
  import StorageContainer from "../StorageContainer";
  
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
        <StorageContainer width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  