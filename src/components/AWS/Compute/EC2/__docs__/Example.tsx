import React, { FC } from "react";
  import EC2 from "../EC2";
  
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
        <EC2 width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  