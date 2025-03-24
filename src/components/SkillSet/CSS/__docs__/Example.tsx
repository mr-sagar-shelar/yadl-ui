import React, { FC } from "react";
  import CSS from "../CSS";
  
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
        <CSS width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  