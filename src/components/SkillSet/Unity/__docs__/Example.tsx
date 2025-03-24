import React, { FC } from "react";
  import Unity from "../Unity";
  
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
        <Unity width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  