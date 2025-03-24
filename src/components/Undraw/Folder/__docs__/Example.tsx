import React, { FC } from "react";
  import Folder from "../Folder";
  
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
        <Folder width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  