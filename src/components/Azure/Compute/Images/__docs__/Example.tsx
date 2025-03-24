import React, { FC } from "react";
  import Images from "../Images";
  
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
        <Images width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  