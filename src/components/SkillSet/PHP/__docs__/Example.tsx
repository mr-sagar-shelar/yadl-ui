import React, { FC } from "react";
  import PHP from "../PHP";
  
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
        <PHP width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  