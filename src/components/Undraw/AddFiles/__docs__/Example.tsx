import React, { FC } from "react";
  import AddFiles from "../AddFiles";
  
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
        <AddFiles width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  