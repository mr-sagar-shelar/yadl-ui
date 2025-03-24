import React, { FC } from "react";
  import Subscribe from "../Subscribe";
  
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
        <Subscribe width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  