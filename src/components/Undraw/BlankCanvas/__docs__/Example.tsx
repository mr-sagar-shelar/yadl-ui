import React, { FC } from "react";
  import BlankCanvas from "../BlankCanvas";
  
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
        <BlankCanvas width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  