import React, { FC } from "react";
  import FSxforLustre from "../FSxforLustre";
  
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
        <FSxforLustre width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  