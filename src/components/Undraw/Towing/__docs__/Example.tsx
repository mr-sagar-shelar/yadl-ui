import React, { FC } from "react";
  import Towing from "../Towing";
  
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
        <Towing width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  