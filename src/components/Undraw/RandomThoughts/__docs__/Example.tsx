import React, { FC } from "react";
  import RandomThoughts from "../RandomThoughts";
  
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
        <RandomThoughts width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  