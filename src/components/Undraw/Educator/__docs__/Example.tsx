import React, { FC } from "react";
  import Educator from "../Educator";
  
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
        <Educator width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  