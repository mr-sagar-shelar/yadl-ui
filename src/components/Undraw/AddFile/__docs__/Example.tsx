import React, { FC } from "react";
  import AddFile from "../AddFile";
  
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
        <AddFile width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  