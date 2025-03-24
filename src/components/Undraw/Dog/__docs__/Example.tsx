import React, { FC } from "react";
  import Dog from "../Dog";
  
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
        <Dog width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  