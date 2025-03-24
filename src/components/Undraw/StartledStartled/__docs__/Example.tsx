import React, { FC } from "react";
  import StartledStartled from "../StartledStartled";
  
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
        <StartledStartled width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  