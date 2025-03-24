import React, { FC } from "react";
  import Error from "../Error";
  
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
        <Error width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  