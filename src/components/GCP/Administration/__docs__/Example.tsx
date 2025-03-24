import React, { FC } from "react";
  import Administration from "../Administration";
  
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
        <Administration width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  