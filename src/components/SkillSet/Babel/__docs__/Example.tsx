import React, { FC } from "react";
  import Babel from "../Babel";
  
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
        <Babel width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  