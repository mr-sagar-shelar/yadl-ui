import React, { FC } from "react";
  import Wordpress from "../Wordpress";
  
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
        <Wordpress width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  