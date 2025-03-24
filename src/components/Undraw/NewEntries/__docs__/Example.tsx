import React, { FC } from "react";
  import NewEntries from "../NewEntries";
  
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
        <NewEntries width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  