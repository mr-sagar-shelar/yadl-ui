import React, { FC } from "react";
  import TextFiles from "../TextFiles";
  
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
        <TextFiles width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  