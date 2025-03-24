import React, { FC } from "react";
  import TextField from "../TextField";
  
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
        <TextField width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  