import React, { FC } from "react";
  import Elements from "../Elements";
  
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
        <Elements width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  