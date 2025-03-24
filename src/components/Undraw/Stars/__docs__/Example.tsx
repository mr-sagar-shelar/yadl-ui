import React, { FC } from "react";
  import Stars from "../Stars";
  
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
        <Stars width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  