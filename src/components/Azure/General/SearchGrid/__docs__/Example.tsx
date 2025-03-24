import React, { FC } from "react";
  import SearchGrid from "../SearchGrid";
  
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
        <SearchGrid width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  