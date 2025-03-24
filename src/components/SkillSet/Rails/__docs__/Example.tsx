import React, { FC } from "react";
  import Rails from "../Rails";
  
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
        <Rails width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  