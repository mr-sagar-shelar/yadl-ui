import React, { FC } from "react";
  import QuietStreet from "../QuietStreet";
  
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
        <QuietStreet width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  