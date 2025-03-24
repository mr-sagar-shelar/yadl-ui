import React, { FC } from "react";
  import EBooks from "../EBooks";
  
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
        <EBooks width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  