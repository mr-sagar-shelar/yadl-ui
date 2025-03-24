import React, { FC } from "react";
  import Media from "../Media";
  
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
        <Media width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  