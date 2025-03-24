import React, { FC } from "react";
  import Posts from "../Posts";
  
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
        <Posts width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  