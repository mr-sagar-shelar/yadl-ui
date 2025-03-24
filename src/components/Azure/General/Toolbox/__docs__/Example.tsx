import React, { FC } from "react";
  import Toolbox from "../Toolbox";
  
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
        <Toolbox width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  