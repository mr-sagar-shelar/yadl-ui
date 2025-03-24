import React, { FC } from "react";
  import BSD from "../BSD";
  
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
        <BSD width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  