import React, { FC } from "react";
  import Apollo from "../Apollo";
  
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
        <Apollo width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  