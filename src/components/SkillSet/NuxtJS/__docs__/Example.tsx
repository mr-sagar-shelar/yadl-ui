import React, { FC } from "react";
  import NuxtJS from "../NuxtJS";
  
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
        <NuxtJS width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  