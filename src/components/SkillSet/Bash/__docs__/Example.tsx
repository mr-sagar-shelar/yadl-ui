import React, { FC } from "react";
  import Bash from "../Bash";
  
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
        <Bash width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  