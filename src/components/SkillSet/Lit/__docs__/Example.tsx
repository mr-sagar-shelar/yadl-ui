import React, { FC } from "react";
  import Lit from "../Lit";
  
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
        <Lit width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  