import React, { FC } from "react";
  import StorageSyncServices from "../StorageSyncServices";
  
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
        <StorageSyncServices width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  