import React, { FC } from "react";
  import OCaml from "../OCaml";
  
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
        <OCaml width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  