import React, { FC } from "react";
  import Together from "../Together";
  
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
        <Together width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  