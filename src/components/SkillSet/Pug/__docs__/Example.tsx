import React, { FC } from "react";
  import Pug from "../Pug";
  
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
        <Pug width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  