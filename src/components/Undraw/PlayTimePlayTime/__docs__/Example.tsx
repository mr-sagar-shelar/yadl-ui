import React, { FC } from "react";
  import PlayTimePlayTime from "../PlayTimePlayTime";
  
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
        <PlayTimePlayTime width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  