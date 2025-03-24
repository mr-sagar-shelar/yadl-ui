import React, { FC } from "react";
  import Opinion from "../Opinion";
  
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
        <Opinion width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  