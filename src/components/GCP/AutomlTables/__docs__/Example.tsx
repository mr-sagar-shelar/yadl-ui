import React, { FC } from "react";
  import AutomlTables from "../AutomlTables";
  
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
        <AutomlTables width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  