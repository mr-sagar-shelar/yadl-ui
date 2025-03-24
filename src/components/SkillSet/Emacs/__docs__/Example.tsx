import React, { FC } from "react";
  import Emacs from "../Emacs";
  
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
        <Emacs width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  