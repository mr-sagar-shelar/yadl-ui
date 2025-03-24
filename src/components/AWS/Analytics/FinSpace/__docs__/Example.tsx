import React, { FC } from "react";
  import FinSpace from "../FinSpace";
  
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
        <FinSpace width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  