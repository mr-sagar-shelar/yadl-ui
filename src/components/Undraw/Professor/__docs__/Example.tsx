import React, { FC } from "react";
  import Professor from "../Professor";
  
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
        <Professor width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  