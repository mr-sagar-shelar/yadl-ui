import React, { FC } from "react";
  import Less from "../Less";
  
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
        <Less width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  