import React, { FC } from "react";
  import Chilling from "../Chilling";
  
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
        <Chilling width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  