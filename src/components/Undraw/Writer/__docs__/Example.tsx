import React, { FC } from "react";
  import Writer from "../Writer";
  
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
        <Writer width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  