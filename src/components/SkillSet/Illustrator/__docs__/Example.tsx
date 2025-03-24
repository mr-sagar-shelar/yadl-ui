import React, { FC } from "react";
  import Illustrator from "../Illustrator";
  
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
        <Illustrator width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  