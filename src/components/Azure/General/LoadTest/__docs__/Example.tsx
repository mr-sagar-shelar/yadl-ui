import React, { FC } from "react";
  import LoadTest from "../LoadTest";
  
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
        <LoadTest width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  