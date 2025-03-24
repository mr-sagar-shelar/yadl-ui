import React, { FC } from "react";
  import Audition from "../Audition";
  
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
        <Audition width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  