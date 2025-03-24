import React, { FC } from "react";
  import ElectionDay from "../ElectionDay";
  
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
        <ElectionDay width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  