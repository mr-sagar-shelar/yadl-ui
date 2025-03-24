import React, { FC } from "react";
  import Docker from "../Docker";
  
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
        <Docker width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  