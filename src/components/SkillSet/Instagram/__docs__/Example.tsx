import React, { FC } from "react";
  import Instagram from "../Instagram";
  
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
        <Instagram width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  