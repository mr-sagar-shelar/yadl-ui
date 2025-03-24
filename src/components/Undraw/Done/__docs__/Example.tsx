import React, { FC } from "react";
  import Done from "../Done";
  
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
        <Done width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  