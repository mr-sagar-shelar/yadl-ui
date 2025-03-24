import React, { FC } from "react";
  import GkeOnprem from "../GkeOnprem";
  
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
        <GkeOnprem width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  