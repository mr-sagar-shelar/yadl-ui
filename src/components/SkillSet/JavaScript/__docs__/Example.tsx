import React, { FC } from "react";
  import JavaScript from "../JavaScript";
  
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
        <JavaScript width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  