import React, { FC } from "react";
  import RightDirection from "../RightDirection";
  
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
        <RightDirection width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  