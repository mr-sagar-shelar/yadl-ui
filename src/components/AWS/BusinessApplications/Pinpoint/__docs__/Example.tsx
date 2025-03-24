import React, { FC } from "react";
  import Pinpoint from "../Pinpoint";
  
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
        <Pinpoint width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  