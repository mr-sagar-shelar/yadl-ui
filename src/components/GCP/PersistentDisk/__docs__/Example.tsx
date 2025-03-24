import React, { FC } from "react";
  import PersistentDisk from "../PersistentDisk";
  
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
        <PersistentDisk width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  