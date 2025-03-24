import React, { FC } from "react";
  import Graduation from "../Graduation";
  
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
        <Graduation width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  