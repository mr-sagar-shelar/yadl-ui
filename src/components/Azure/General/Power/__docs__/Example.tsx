import React, { FC } from "react";
  import Power from "../Power";
  
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
        <Power width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  