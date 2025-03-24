import React, { FC } from "react";
  import VueJS from "../VueJS";
  
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
        <VueJS width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  