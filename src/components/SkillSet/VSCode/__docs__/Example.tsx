import React, { FC } from "react";
  import VSCode from "../VSCode";
  
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
        <VSCode width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  