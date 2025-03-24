import React, { FC } from "react";
  import DataLakeStoreGen1 from "../DataLakeStoreGen1";
  
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
        <DataLakeStoreGen1 width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  