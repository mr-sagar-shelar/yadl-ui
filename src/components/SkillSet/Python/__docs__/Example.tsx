import React, { FC } from "react";
  import Python from "../Python";
  
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
        <Python width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  