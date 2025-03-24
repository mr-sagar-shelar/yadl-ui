import React, { FC } from "react";
  import Texting from "../Texting";
  
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
        <Texting width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  