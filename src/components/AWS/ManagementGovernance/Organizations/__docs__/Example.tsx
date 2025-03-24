import React, { FC } from "react";
  import Organizations from "../Organizations";
  
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
        <Organizations width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  