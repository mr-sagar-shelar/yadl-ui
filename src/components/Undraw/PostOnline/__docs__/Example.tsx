import React, { FC } from "react";
  import PostOnline from "../PostOnline";
  
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
        <PostOnline width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  