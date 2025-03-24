import React, { FC } from "react";
  import Transfer from "../Transfer";
  
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
        <Transfer width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  