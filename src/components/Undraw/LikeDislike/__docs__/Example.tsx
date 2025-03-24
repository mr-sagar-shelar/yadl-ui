import React, { FC } from "react";
  import LikeDislike from "../LikeDislike";
  
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
        <LikeDislike width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  