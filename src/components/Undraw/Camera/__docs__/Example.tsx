import React, { FC } from "react";
  import Camera from "../Camera";
  
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
        <Camera width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  