import React, { FC } from "react";
  import Marketing from "../Marketing";
  
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
        <Marketing width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  