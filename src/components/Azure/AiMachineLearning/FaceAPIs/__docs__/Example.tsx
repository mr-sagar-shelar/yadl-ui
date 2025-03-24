import React, { FC } from "react";
  import FaceAPIs from "../FaceAPIs";
  
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
        <FaceAPIs width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  