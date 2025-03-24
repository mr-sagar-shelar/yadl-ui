import React, { FC } from "react";
  import Angular from "../Angular";
  
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
        <Angular width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  