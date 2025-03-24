import React, { FC } from "react";
  import Rider from "../Rider";
  
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
        <Rider width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  