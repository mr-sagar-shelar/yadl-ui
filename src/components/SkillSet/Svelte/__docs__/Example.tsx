import React, { FC } from "react";
  import Svelte from "../Svelte";
  
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
        <Svelte width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  