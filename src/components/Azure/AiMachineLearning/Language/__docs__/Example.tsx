import React, { FC } from "react";
  import Language from "../Language";
  
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
        <Language width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  