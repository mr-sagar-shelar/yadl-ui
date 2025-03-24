import React, { FC } from "react";
  import Remix from "../Remix";
  
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
        <Remix width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  