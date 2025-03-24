import React, { FC } from "react";
  import ExpressJS from "../ExpressJS";
  
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
        <ExpressJS width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  