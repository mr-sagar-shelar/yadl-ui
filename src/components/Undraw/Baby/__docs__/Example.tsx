import React, { FC } from "react";
  import Baby from "../Baby";
  
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
        <Baby width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  