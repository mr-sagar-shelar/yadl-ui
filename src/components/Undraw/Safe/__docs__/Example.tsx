import React, { FC } from "react";
  import Safe from "../Safe";
  
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
        <Safe width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  