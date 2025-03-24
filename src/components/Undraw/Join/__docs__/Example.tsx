import React, { FC } from "react";
  import Join from "../Join";
  
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
        <Join width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  