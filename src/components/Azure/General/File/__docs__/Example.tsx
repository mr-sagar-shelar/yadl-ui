import React, { FC } from "react";
  import File from "../File";
  
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
        <File width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  