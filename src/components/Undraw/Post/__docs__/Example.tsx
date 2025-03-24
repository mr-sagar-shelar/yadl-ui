import React, { FC } from "react";
  import Post from "../Post";
  
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
        <Post width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  