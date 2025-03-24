import React, { FC } from "react";
  import Plan9 from "../Plan9";
  
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
        <Plan9 width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  