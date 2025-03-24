import React, { FC } from "react";
  import Extensions from "../Extensions";
  
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
        <Extensions width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  