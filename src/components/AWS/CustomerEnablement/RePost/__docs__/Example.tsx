import React, { FC } from "react";
  import RePost from "../RePost";
  
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
        <RePost width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  