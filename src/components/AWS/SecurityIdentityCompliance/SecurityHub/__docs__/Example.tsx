import React, { FC } from "react";
  import SecurityHub from "../SecurityHub";
  
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
        <SecurityHub width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  